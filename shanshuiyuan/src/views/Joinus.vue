<template>
  <div class="view-contain">
    <Header></Header>
    <el-row style="width: 80%;margin: 0 auto;">
      <el-col :span="10">
        <div v-for="(item, index) in list" :key="index" style="text-align: left;">
          <img :src="item.url" alt style="width: 50px" />
          <span>{{item.val}}</span>
        </div>
      </el-col>
      <el-col :span="14">sdf</el-col>
    </el-row>
    <div></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filelist from "../components/admin/Filelist";
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
    Filelist
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
