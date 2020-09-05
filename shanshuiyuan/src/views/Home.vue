<template>
  <div class="view-contain">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <!-- <Carousel></Carousel> -->
        <Lunbo></Lunbo>
        <h2 class="title">业务版块</h2>
        <BusinessSection></BusinessSection>
        <h2 class="title">热点新闻</h2>
        <NewsSection style="width: 70%;margin: 0 auto"></NewsSection>
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
import Lunbo from "../components/lunbo";
import BusinessSection from "../components/BusinessSection";
import NewsSection from "../components/NewsSection";

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
    NewsSection,
    Lunbo
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  width: 120px;
  margin: 10px auto
}
</style>
