<template>
  <div style="width: 100%">
    <div class="icon" v-if="showdelete">
      <i class="el-icon-refresh" @click="refresh()"></i>
    </div>
    <div v-for="(items, index) in newsList" :key="index" class="contain">
      <el-row class="news-row">
        <el-col :span="16" class="content">
          <a :href="items.url" target="_blank">{{items.title}}</a>
        </el-col>
        <el-col :span="5" class="date">
          <span>{{items.date}}</span>
        </el-col>
        <el-col :span="3" v-if="showdelete">
          <el-link type="danger" @click="deleteConfirm(items)">删除</el-link>
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
  props: ["showdelete"],
  methods: {
    getNews(showMsg) {
      axios.get("/news/getnews").then(response => {
        let res = response.data;
        if (res.status == "0") {
          this.newsList = res.result;
          if (showMsg) {
            this.$message({
              message: "获取成功！",
              type: "success"
            });
          }
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
      this.getNews(true);
    },
    deleteConfirm(items) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteNews(items);
        }).catch(() => {
                    
        });
    },
    deleteNews(items) {
      axios
        .get("/news/deletenews", {
          params: {
            title: items.title
          }
        })
        .then(response => {
          let res = response.data;
          if (res.status == "0") {
            this.$message({
              message: "删除成功！",
              type: "success"
            });
            this.getNews(false);
          } else {
            this.$message({
              message: "删除失败！",
              type: "error"
            });
          }
        });
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
