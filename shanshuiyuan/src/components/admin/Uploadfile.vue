<template>
  <div style="width: 100%">
    <el-upload
      ref="upload"
      class="upload-demo"
      action="/ip/uploadFile"
      :before-upload="beforeUpload"
      :on-success="uploadSuccess"
      :limit="1"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <Filelist ref="filelistModel"></Filelist>
  </div>
</template>

<script>
import Filelist from "./Filelist";
export default {
  name: "Fileuplaod",
  components: {
    Filelist
  },
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    uploadSuccess(response, file, fileList){
      this.$refs.filelistModel.getFilelist();
      this.$refs.upload.clearFiles();
    },
    //校验规则
    beforeUpload(file) {
      console.log("ste");
    },

  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
