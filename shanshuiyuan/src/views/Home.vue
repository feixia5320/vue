<template>
  <div>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <Carousel></Carousel>
        <!-- 路由插槽 -->
        <router-view />
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer"
import Carousel from "../components/Carousel";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    Carousel
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
