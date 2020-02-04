<template>
  <div style="width: 100%">
    <el-table
      ref="multipleTable"
      :data="newsList"
      tooltip-effect="dark"
      stripe
      class="table-contain"
      :default-sort="{prop: 'date', order: 'descending'}"
      @sort-change="sortChange"
      @selection-change="handleSelectionChange"
    >
      <el-table-column v-if="isadmin" type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="日期" width="150" sortable="custom"></el-table-column>
      <el-table-column prop="title" label="标题" sortable="custom" show-overflow-tooltip></el-table-column>
      <el-table-column v-if="isadmin" prop="url" label="链接" sortable="custom" show-overflow-tooltip></el-table-column>
      <el-table-column v-if="isadmin" label="操作" width="80">
        <template slot-scope="scope">
          <el-link type="danger" @click="deleteConfirm(scope.row)">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="page.total"
      :current-page="page.curentPage"
      @current-change="changePage"
      class="pagination"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "Newslist",
  data() {
    return {
      newsList: [],
      multipleSelection: [],
      page: {
        curentPage: 1,
        total: 20
      },
      sort: {
        sortFeild: "date",
        sort: -1
      }
    };
  },
  props: {
    isadmin: {
      type: Boolean,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return true
      }
    },
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    getNews() {
      let curentPage = this.page.curentPage;
      let sortFeild = this.sort.sortFeild;
      let sort = this.sort.sort;
      this.$axios
        .get("/news/getnews", {
          params: {
            curentPage: curentPage,
            pageSize: 10,
            sortFeild: sortFeild,
            sort: sort
          }
        })
        .then(response => {
          let res = response.data;
          if (res.status == "0") {
            this.newsList = res.result.list;
            this.page.total = res.result.count;
            this.page.curentPage = curentPage;
          } else {
            if (true) {
              this.$message({
                message: "获取失败！",
                type: "error"
              });
            }
          }
        });
    },
    deleteConfirm(items) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deleteNews(items);
        })
        .catch(() => {});
    },
    deleteNews(items) {
      this.$axios
        .get("/news/deletenews", {
          params: {
            title: items.title
          }
        })
        .then(response => {
          let res = response.data;
          if (res.status == "0") {
            this.$message({
              message: "删除成功！",
              type: "success"
            });
            this.getNews();
          } else {
            this.$message({
              message: "删除失败！",
              type: "error"
            });
          }
        });
    },
    sortChange(e) {
      let sortFeild = e.prop;
      let sort = e.order == "ascending" ? 1 : -1;
      this.sort.sortFeild = sortFeild;
      this.sort.sort = sort;

      this.getNews();
    },
    changePage(curentPage) {
      this.page.curentPage = curentPage;
      this.getNews();
    }
  },
  mounted() {
    this.getNews();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-contain {
  width: 80%;
  margin: 0 auto;
}
.pagination {
  width: 80%;
  text-align: right;
  margin: 0 auto;
}
</style>
