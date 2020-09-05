<template>
  <div style="width: 100%">
    <el-table
      ref="multipleTable"
      :data="fileList"
      tooltip-effect="dark"
      stripe
      class="table-contain"
      :default-sort="{prop: 'date', order: 'descending'}"
      @sort-change="sortChange"
      @selection-change="handleSelectionChange"
    >
      <el-table-column v-if="isadmin" type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="日期" width="100" sortable="custom"></el-table-column>
      <el-table-column label="活动名称" sortable="custom" show-overflow-tooltip>
        <template slot-scope="scope">
          <span
            @click="activeDetail(scope.row)"
            style="text-decoration: underline;cursor: pointer;"
          >{{scope.row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="isadmin" label="操作" width="150">
        <template slot-scope="scope">
          <el-link
            type="danger"
            v-if="false"
            style="margin-right: 10px"
            @click="download(scope.row)"
          >下载</el-link>
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
import { NoticeLists } from "../../utils/demoData/testData";
export default {
  name: "Activelist",
  data() {
    return {
      fileList: [],
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
      default: function() {
        return true;
      }
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    getActiveList() {
      let curentPage = this.page.curentPage;
      let sortFeild = this.sort.sortFeild;
      let sort = this.sort.sort;
      this.$axios
        .get("/ip/getActiveList", {
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
            this.fileList = res.list;
            this.page.total = res.count;
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

    download(item) {
      this.downloadflie2("/ip/download?fileId=" + item.fileId);
      // this.$axios.get("/ip/download").then(res => {
      //   let fileName = res.headers['content-disposition'].split('filename=')[1];
      //   this.downloadflie(res.data, fileName);
      // });
    },
    downloadflie(data, fileName) {
      if (!data) {
        return;
      }
      let url = window.URL.createObjectURL(new Blob([data]));
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      // 获取文件名
      // download 属性定义了下载链接的地址而不是跳转路径
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      //释放URL对象所占资源
      // window.URL.revokeObjectURL(url);
      // //用完即删
      // document.body.removeChild(link);
    },
    downloadflie2(url) {
      let iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = url;
      iframe.onload = function() {
        document.body.removeChild(iframe);
      };
      document.body.appendChild(iframe);
    },
    deleteConfirm(item) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let content = JSON.parse(item.content);
          for (let i in content) {
            if (content[i].type == "img") {
              this.deleteFile(content[i].val);
            }
          }
          this.deleteActive(item.id);
        })
        .catch(() => {});
    },
    deleteActive(id) {
      this.$axios
        .get("/ip/deleteActive", {
          params: {
            id: id
          }
        })
        .then(response => {
          let res = response.data;
          if (res.status == "0") {
            console.log("deleteActive");
            this.getActiveList();
          }
        });
    },
    deleteFile(fileId) {
      this.$axios
        .get("/ip/deleteFile", {
          params: {
            fileId: fileId
          }
        })
        .then(response => {
          let res = response.data;
          if (res.status == "0") {
            console.log("deleteFile");
          }
        });
    },
    sortChange(e) {
      let sortFeild = e.prop;
      let sort = e.order == "ascending" ? 1 : -1;
      this.sort.sortFeild = sortFeild;
      this.sort.sort = sort;

      this.getActiveList();
    },
    changePage(curentPage) {
      this.page.curentPage = curentPage;
      this.getActiveList();
    },
    activeDetail(item) {
      this.$router.push("/activedetail/" + item.id);
    },
    initData() {
      this.fileList = NoticeLists;
    }
  },
  mounted() {
    // this.initData();
    this.getActiveList();
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
