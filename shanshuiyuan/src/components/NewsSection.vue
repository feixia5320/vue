<template>
  <div style="width: 100%">
    <div v-for="(items, index) in newsList" :key="index" class="contain">
      <el-row class="news-row">
        <el-col :span="16" class="content">
          <a :href="items.url" target="_blank">{{items.title}}</a>
        </el-col>
        <el-col :span="5" class="date">
          <span>{{items.date}}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { Const } from "../utils/const";
import axios from "axios";

export default {
  name: "NewsSection",
  data() {
    return {
      newsList: []
    };
  },
  methods: {
    getNews(showMsg) {
      let curentPage = 1;
      let sortFeild = 'date';
      let sort = -1;
      axios
        .get("/news/getnews", {
          params: {
            curentPage: curentPage,
            pageSize: 10,
            sortFeild: sortFeild,
            sort: sort
          }
        })
        .then(response => {
          let res = response.data;
          if (res.status == "0") {
            this.newsList = res.result.list.slice(0, 5);
          } else {
            if (showMsg) {
              this.$message({
                message: "获取失败！",
                type: "error"
              });
            }
          }
        });
    },
    refresh() {
      this.getNews();
    }
  },
  mounted() {
    this.getNews();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  width: 90%;
  margin: 0 auto;
  padding: 10px 30px;
}
.news-row {
  box-sizing: border-box;
  border-bottom: 1px dashed gray;
  padding-bottom: 10px;
}
.date {
  text-align: right;
}
.content {
  text-align: left;
}
.icon {
  text-align: left;
}
.icon i {
  font-size: 20px;
  cursor: pointer;
  margin-left: 33px;
}
</style>
