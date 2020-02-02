<template>
  <div style="width: 100%">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm formcontain"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="链接" prop="url">
        <el-input v-model="ruleForm.url"></el-input>
      </el-form-item>
      <el-form-item label="日期" prop="date">
        <el-input v-model="ruleForm.date"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Newslist",
  data() {
    let notempty = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空！"));
      }
      callback();
    };
    return {
      ruleForm: {
        title: "",
        url: "",
        date: ""
      },
      rules: {
        title: [{ validator: notempty, trigger: "change" }],
        url: [{ validator: notempty, trigger: "change" }],
        date: [{ validator: notempty, trigger: "change" }]
      }
    };
  },
  methods: {
    resetForm() {
      this.$refs["ruleForm"].resetFields();
    },
    submitForm() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.addNews();
        } else {
          return false;
        }
      });
    },
    addNews() {
      this.$axios
        .post("/news/addNews", {
          title: this.ruleForm.title,
          url: this.ruleForm.url,
          date: this.ruleForm.date
        })
        .then(response => {
          let res = response.data;
          if (res.status == "0") {
            this.$message({
              message: "上传成功！",
              type: "success"
            });
            this.resetForm();
          } else {
            this.$message({
              message: "标题重复！",
              type: "warning"
            });
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formcontain {
  width: 60%;
  margin: 40px auto;
}
</style>
