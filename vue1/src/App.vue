<template>
  <div id="app">
    <div>
      <el-button v-for="(item, index) in navList" v-bind:key="index" type="primary" 
        @click="gotoNav($event, index)">{{item}}</el-button>
    </div>
    <el-container>
      <el-header>
        <div class="leftmenu">
          <img src="./assets/logo.png" style="width:50px" />
          <router-link to="/slot">slot</router-link>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-col style="margin-top:20px">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item
                  v-for="item in items"
                  v-bind:key="item.key"
                  @click="clickNav(item.key)"
                  index="item.key"
                >{{item.label}}</el-menu-item>
              </el-submenu>

              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>导航二</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-submenu>

              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4" disabled>
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <!-- 路由插槽 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "nav vue",
      // 导航按钮
      navList: ["helloworld", "test", "prop", "layout", "nav", "moment"],
      items: [
        {
          key: 1,
          label: "aaaa"
        },
        {
          key: 2,
          label: "bbb"
        },
        {
          key: 3,
          label: "ccc"
        }
      ]
    };
  },
  methods: {
    gotoNav(event, index) {
      let state = "/" + this.navList[index];
      this.$router.push(state);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickNav(key) {
      console.log(key);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-left: 30p;
  margin-top: 60px;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
