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
          <NewsSection style="margin: 30px auto" :showdelete="true" ref="newsSection"></NewsSection>
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
      this.$refs['ruleForm'].resetFields();
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
    clickTabs(tab, event) {
      if (tab.name == "newsList") {
        //刷新子组建数据
        this.$refs.newsSection.refresh();
      }
    }
  },
  mounted() {
    this.checkLogin();
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
  width: 55%;
  margin: 0 auto;
  overflow: auto;
}
.formcontain {
  width: 80%;
  margin: 40px auto;
}
</style>
