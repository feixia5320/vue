<template>
  <div class="view-contain">
    <Header></Header>
    <!-- 路由插槽 -->
    <router-view />
    <Newslist :isadmin="false"></Newslist>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Newslist from "../components/admin/Newslist";

export default {
  name: "News",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    Newslist
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
