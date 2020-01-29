<template>
  <div>
    <Header></Header>
    <!-- 路由插槽 -->
    <router-view />
    <p>jdsjlfkj</p>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Company",
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
