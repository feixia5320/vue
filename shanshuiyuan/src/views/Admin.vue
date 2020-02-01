
<template>
  <div style="width: 99%">
    <Header></Header>
    <div class="user-info">
      <span>用户名：{{userName}}</span>
      <el-link type="primary" v-if="!isLogin" @click="login()">login</el-link>
      <el-link type="primary" v-else @click="logout()">logout</el-link>
    </div>
    <div>
      <el-tabs tab-position="top" class="tabs" v-model="activeName" @tab-click="clickTabs">
        <el-tab-pane label="新闻列表" name="newsList">
          <el-table
            ref="multipleTable"
            :data="newsList"
            tooltip-effect="dark"
            stripe
            style="width: 95%"
            :default-sort="{prop: 'date', order: 'descending'}"
            @sort-change="sortChange"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="date" label="日期" width="100" sortable="custom"></el-table-column>
            <el-table-column prop="title" label="标题" sortable="custom" show-overflow-tooltip></el-table-column>
            <el-table-column prop="url" label="链接" sortable="custom" show-overflow-tooltip></el-table-column>
            <el-table-column label="操作" width="80">
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
            style="text-align: right; margin-right: 36px;"
          ></el-pagination>
        </el-tab-pane>
        <el-tab-pane label="上传新闻" name="addNews">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm formcontain"
          >
            <el-form-item label="标题" prop="title">
              <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="链接" prop="url">
              <el-input v-model="ruleForm.url"></el-input>
            </el-form-item>
            <el-form-item label="日期" prop="date">
              <el-input v-model="ruleForm.date"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm()">提交</el-button>
              <el-button @click="resetForm()">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="访问量" name="visit">
          <div id="myChart" class="echartBox" :style="{width: '90%', height: '400px'}"></div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsSection from "../components/NewsSection";
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "Admin",
  data() {
    let notempty = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空！"));
      }
      callback();
    };
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
      },
      ruleForm: {
        title: "",
        url: "",
        date: ""
      },
      rules: {
        title: [{ validator: notempty, trigger: "change" }],
        url: [{ validator: notempty, trigger: "change" }],
        date: [{ validator: notempty, trigger: "change" }]
      },
      activeName: "newsList"
    };
  },
  computed: {
    //使用对象展开运算符
    ...mapState({
      // 箭头函数可使代码更简练
      userName: state => state.userName
    }),
    isLogin() {
      return this.userName.length > 0;
    }
  },
  components: {
    Header,
    Footer,
    NewsSection
  },
  methods: {
    clickTabs(tab, event) {
      if (tab.name == "newsList") {
        this.getNews();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
    },
    getNews() {
      let curentPage = this.page.curentPage;
      let sortFeild = this.sort.sortFeild;
      let sort = this.sort.sort;
      axios
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
      axios
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
    login() {
      this.$router.push("/login");
    },
    checkLogin() {
      axios.get("/users/checkLogin").then(response => {
        let res = response.data;
        let path = this.$route.pathname;
        if (res.status == "0") {
          this.$store.commit("updateUserInfo", res.result);
        } else {
          if (this.$route.path != "/login") {
            this.$router.push("/login");
          }
        }
      });
    },
    logout() {
      axios.post("/users/logout").then(response => {
        let res = response.data;
        if (res.status == "0") {
          this.$store.commit("updateUserInfo", res.result);
        }
      });
    },
    resetForm() {
      this.$refs["ruleForm"].resetFields();
    },
    submitForm() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.addNews();
        } else {
          return false;
        }
      });
    },
    addNews() {
      axios
        .post("/news/addNews", {
          title: this.ruleForm.title,
          url: this.ruleForm.url,
          date: this.ruleForm.date
        })
        .then(response => {
          let res = response.data;
          if (res.status == "0") {
            this.$message({
              message: "上传成功！",
              type: "success"
            });
            this.resetForm();
          } else {
            this.$message({
              message: "标题重复！",
              type: "warning"
            });
          }
        });
    },
    getVisitNum() {
      axios
        .get("/ip/getVisitNum").then(response => {
          let res = response.data;
          if (res.status == "0") {
            let obj = {
              xList: res.result.dateList,
              yList: res.result.countList,
            }
            this.drawLine(obj);
          }
        });
    },
    drawLine(item) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));

      let option = {
        title: {
          text: "网站访问量统计表"
        },
        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   data: ["邮件营销", "联盟广告"]
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: item.xList
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            smooth: true,
            data: item.yList
          }
        ]
      };

      myChart.setOption(option, (window.onresize = myChart.resize));
    }
  },
  mounted() {
    this.getNews();
    this.checkLogin();
    this.getVisitNum();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-info {
  float: right;
  margin-top: -64px;
  margin-right: 25px;
}
.tabs {
  height: 60%;
  width: 70%;
  margin: 0 auto;
  overflow: auto;
}
.formcontain {
  width: 60%;
  margin: 40px auto;
}
</style>
