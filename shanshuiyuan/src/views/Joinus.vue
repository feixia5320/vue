<template>
  <div class="view-contain">
    <Header></Header>
    <el-row style="width: 80%;margin: 0 auto;">
      <el-col :span="8">
        <div v-for="(item, index) in list" :key="index" class="row">
          <img :src="item.url" alt style="width: 50px" />
          <span class="row-span">{{item.val}}</span>
          <span v-if="index == 2" class="phone2">{{i18n.info_phone2}}</span>
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
import { lan_zh } from "../i18n/zh";

export default {
  name: "Notice",
  data() {
    return {
      list: Const.joinus,
      i18n: lan_zh.lan
    };
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
.row {
  text-align: left;
  height: 55px;
  position: relative;
}
.row-span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 15px;
}
.phone2 {
  display: block;
  margin-left: 65px;
}
</style>
