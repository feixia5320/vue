<template>
  <div class="view-contain">
    <Header></Header>
    <!-- 路由插槽 -->
    <router-view />
    <Filelist ref="filelistModel" :isadmin="false"></Filelist>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filelist from "../components/admin/Filelist";

export default {
  name: "Notice",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    Filelist
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
