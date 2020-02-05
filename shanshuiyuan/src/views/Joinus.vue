<template>
  <div class="view-contain">
    <Header></Header>
    <el-row style="width: 80%;margin: 0 auto;">
      <el-col :span="8">
        <div v-for="(item, index) in list" :key="index" style="text-align: left;">
          <img :src="item.url" alt style="width: 50px" />
          <span>{{item.val}}</span>
        </div>
      </el-col>
      <el-col :span="16">
        <img src="../assets/location2.png" alt style="width: 100%" />
      </el-col>
    </el-row>
    <div></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Const } from "../utils/const";

export default {
  name: "Notice",
  data() {
    return {
      list: Const.joinus
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
