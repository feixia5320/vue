<template>
  <div class="view-contain">
    <Header></Header>
    <BusinessSection></BusinessSection>
    <!-- 路由插槽 -->
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import BusinessSection from "../components/BusinessSection";
import { Const } from "../utils/const";

export default {
  name: "Business",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    BusinessSection
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
