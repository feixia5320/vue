<template>
  <div class="view-contain">
    <Header></Header>
    <Activelist :isadmin="false"></Activelist>
    <!-- 路由插槽 -->
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Activelist from "../components/admin/Activelist"

export default {
  name: "Notice",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    Activelist
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
