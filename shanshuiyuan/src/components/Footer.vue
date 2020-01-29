<template>
  <div class="foot-contain">
    <el-row :gutter="20">
      <el-col :span="14">
        <ul class="list-contain">
          <li v-for="(item, index) in footer" :key="index">
            {{item.title}}
            <div style="margin-top: 20px"></div>
            <div v-for="(oo, index ) in item.list" :key="index" class="link">
              <a :href="oo.url">{{oo.name}}</a>
            </div>
          </li>
        </ul>
      </el-col>
      <el-col :span="10">
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
      footer: Const.footer,
    };
  },
  methods: {
  },
  created() {}
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.foot-contain {
  background-color: #f6f6f6;
}
.list-contain {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.list-contain li {
  width: 100px;
  text-align: left;
  font-weight: bold;
}
.link {
  font-weight: normal;
  text-align: left;
}
.info-contain {
  text-align: left;
}
.info-contain p {
  margin-top: -40px;
  margin-left: 90px;
}
</style>