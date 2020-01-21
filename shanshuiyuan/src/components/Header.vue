<template>
  <div class="main-contain">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">{{i18n.home_nav_homepage}}</el-menu-item>
      <el-submenu index="2">
        <template slot="title">{{i18n.home_nav_company}}</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">{{i18n.home_nav_news}}</el-menu-item>
      <el-menu-item index="4">{{i18n.home_nav_aboutus}}</el-menu-item>
      <el-menu-item index="5">{{i18n.home_nav_admin}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { lan_zh } from "../i18n/zh";
export default {
  name: "Header",
  data() {
    return {
      i18n: lan_zh.lan,
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
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
</style>