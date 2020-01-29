<template>
  <div>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <Carousel></Carousel>
        <h2 style="width: 120px;margin: 10px auto">业务版块</h2>
        <BusinessSection></BusinessSection>
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
import BusinessSection from "../components/BusinessSection";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    Carousel,
    BusinessSection,
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
