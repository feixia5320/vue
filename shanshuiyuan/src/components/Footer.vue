<template>
  <div class="foot-contain">
    <el-row :gutter="20">
      <el-col :span="17">
        <h4 class="link-title">相关链接:</h4>
        <div class="link-urls-contain">
          <span class="item" v-for="(item, index) in footer" :key="index">
            <a :href="item.url" target="_blank">{{item.name}}</a>
          </span>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="info-contain">
          <div>
            <img src="../assets/dc10.jpg" alt />
            <p>{{i18n.info_componey}}</p>
          </div>
          <div>
            <img src="../assets/dc11.jpg" alt />
            <p>{{i18n.info_phone}}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { lan_zh } from "../i18n/zh";
import { Const } from "../utils/const";
export default {
  name: "Footer",
  data() {
    return {
      i18n: lan_zh.lan,
      footer: Const.footerLinks
    };
  },
  methods: {},
  created() {}
};
</script>

<style scoped>
.foot-contain {
  background-color: #f6f6f6ce;
}

.link-title {
  text-align: left;
  margin: 10px;
}
.link-urls-contain {
  padding: 10px;
}
.item {
  display: inline-block;
  width: 20%;
  text-align: left;
  font-size: 14px;
  line-height: 23px;
}
.item a {
  color: #888;
  text-decoration: none;
}
.item a:hover {
  color: rgb(71, 71, 238);
  text-decoration: underline;
}

.info-contain {
  text-align: left;
  margin-top: 10px;
}
.info-contain p {
  margin-top: -40px;
  margin-left: 90px;
}
.info-contain img {
  width: 360px;
}

</style>