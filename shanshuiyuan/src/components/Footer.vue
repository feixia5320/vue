<template>
  <div class="foot-contain">
    <el-row :gutter="20">
      <el-col :span="16">
        <h4 class="link-title">相关链接:</h4>
        <div class="link-urls-contain">
          <span class="item" v-for="(item, index) in footer" :key="index">
            <a :href="item.url" target="_blank">{{item.name}}</a>
          </span>
        </div>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-col :span="5">
            <img src="../assets/dc10.jpg" alt />
          </el-col>
          <el-col :span="15" class="text_align">
            <p>{{i18n.info_componey}}</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="5">
            <img src="../assets/dc11.jpg" alt />
          </el-col>
          <el-col :span="19" class="text_align">
            <div class="info_phone">
              <p>{{i18n.info_phone}}</p>
              <p>{{i18n.info_phone2}}</p>
            </div>
            <div class="info_img">
              <img src="../assets/join_weixin_dan.jpg" alt="">
              <img src="../assets/join_weixin_bo.jpg" alt="">
            </div>
          </el-col>
        </el-row>
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
.text_align {
  text-align: left;
}
.margin-top p {
  margin-top: 8px;

}
.info_phone {
  margin-right: 16px;
  display: inline-block;
  vertical-align: top;
}
.info_img {
  display: inline-block;
  width: 180px;
}
.info_img img {
  width: 80px;
}
</style>