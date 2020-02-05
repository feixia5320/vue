
<template>
  <div class="view-contain">
    <Header></Header>
    <div class="user-info">
      <span>用户名：{{userName}}</span>
      <el-link type="primary" v-if="!isLogin" @click="login()">login</el-link>
      <el-link type="primary" v-else @click="logout()">logout</el-link>
    </div>
    <div>
      <el-tabs tab-position="top" class="tabs" v-model="activeName" @tab-click="clickTabs">
        <el-tab-pane label="新闻列表" name="newslist"></el-tab-pane>
        <el-tab-pane label="上传新闻" name="uploadnews"></el-tab-pane>
        <el-tab-pane label="访问量" name="visit"></el-tab-pane>
        <el-tab-pane label="公司动态" name="activelist"></el-tab-pane>
        <el-tab-pane label="上传动态" name="active"></el-tab-pane>
      </el-tabs>
      <!-- 路由插槽 -->
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import { mapState } from "vuex";

export default {
  name: "Admin",
  data() {
    return {
      activeName: "newslist"
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
    Footer
  },
  methods: {
    clickTabs(tab, event) {
      this.$router.push("/admin/" + tab.name);
      if (tab.name == "newsList") {
        // this.getNews();
      }
    },
    login() {
      this.$router.push("/login");
    },
    checkLogin() {
      this.$axios.get("/users/checkLogin").then(response => {
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
      this.$axios.post("/users/logout").then(response => {
        let res = response.data;
        if (res.status == "0") {
          this.$store.commit("updateUserInfo", res.result);
        }
      });
    }
  },
  mounted() {
    this.checkLogin();
  },
  watch: {
    '$route' (to, from) {
      this.activeName = to.path.split('/admin/')[1];
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-info {
  float: right;
  margin-top: -55px;
  margin-right: 25px;
}
.tabs {
  height: 60px;
  width: 40%;
  margin: 0 auto;
  overflow: auto;
}
</style>
