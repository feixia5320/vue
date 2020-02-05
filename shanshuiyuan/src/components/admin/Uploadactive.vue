<template>
  <div style="width: 100%">
    <el-button type="primary" @click="addItem('txt')">增加段落</el-button>
    <el-button type="primary" @click="addItem('img')">增加图片</el-button>
    <form>
      <h4>活动名称</h4>
      <el-input v-model="title" class="row"></el-input>
      <h4>活动内容</h4>
      <span></span>
      <div v-for="(item, index) in list" :key="index" class="row">
        <el-row>
          <el-col :span="20">
            <el-input v-if="item.type == 'txt'" v-model="item.val"></el-input>
            <el-upload
              v-if="item.type == 'img'"
              class="upload-demo"
              action="/ip/uploadFile"
              :before-upload="beforeUpload(index)"
              :on-success="uploadSuccess"
              :limit="1"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-col>
          <el-col :span="4">
            <el-link type="danger" @click="deleteConfirm(index)">删除</el-link>
          </el-col>
        </el-row>
      </div>
      <br />
      <el-button type="primary" @click="uploadForm()">提交</el-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Uploadactive",
  components: {
  },
  data() {
    return {
      title: "",
      list: [],
      curIndex: 0
    };
  },
  methods: {
    addItem(type) {
      let obj = {
        type: type,
        val: ""
      };
      this.list.push(obj);
    },
    deleteConfirm(index) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let type = this.list[index].type;
          let val = this.list[index].val;
          if (type == "img" && val) {
            this.deleteFile(index);
          } else {
            this.list.splice(index, 1);
          }
        })
        .catch(() => {});
    },
    deleteFile(index) {
      let fileId = this.list[index].val;
      this.$axios
        .get("/ip/deleteFile", {
          params: {
            fileId: fileId
          }
        })
        .then(response => {
          let res = response.data;
          if (res.status == "0") {
            this.list.splice(index, 1);
          }
        });
    },
    //校验规则
    beforeUpload(index) {
      this.curIndex = index;
    },
    uploadSuccess(response, file, fileList) {
      this.list[this.curIndex].val = response.msg;
    },
    uploadForm() {
      let content = JSON.stringify(this.list);
      this.$axios
        .post("/ip/addActive", { title: this.title, content: content })
        .then(response => {
          let res = response.data;
          if (res.status == "0") {
            this.list = [];
            this.title = "";
            this.$message({
              message: "上传成功！",
              type: "success"
            });
          }
        });
    },
    
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  width: 60%;
  margin: 0 auto;
}
</style>
