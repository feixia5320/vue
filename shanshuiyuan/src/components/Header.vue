<template>
  <div class="main-contain">
    <span class="logo">
      <img src="../assets/logo.jpg" alt />
    </span>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo nav"
      mode="horizontal"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="/">{{i18n.home_nav_homepage}}</el-menu-item>
      <el-menu-item index="/company">{{i18n.home_nav_company}}</el-menu-item>
      <!-- <el-submenu index="/company">
        <template slot="title">{{i18n.home_nav_company}}</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu> -->
      <el-menu-item index="/business/huanping">{{i18n.home_nav_business}}</el-menu-item>
      <el-menu-item index="/news">{{i18n.home_nav_news}}</el-menu-item>
      <el-menu-item index="/notice">{{i18n.home_nav_notice}}</el-menu-item>
      <el-menu-item index="/admin/newslist">{{i18n.home_nav_admin}}</el-menu-item>
      <el-menu-item index="/joinus">{{i18n.home_nav_joinus}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { lan_zh } from "../i18n/zh";
import { mapState } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      i18n: lan_zh.lan,
      canRouter: true
    };
  },
  computed: {
    //使用对象展开运算符
    ...mapState({
      // 箭头函数可使代码更简练
      activeIndex: state => state.navState
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$store.commit("updateState", key);
      this.$router.push(key);
    },
  },
  created() {}
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.main-contain {
  width: 70%;
  margin: 0 auto;
}
.logo {
  display: inline-block;
  margin-right: 80px;
}
.logo img {
  width: 70px;
}
.nav {
  display: inline-block;
  vertical-align: top;
}
</style>