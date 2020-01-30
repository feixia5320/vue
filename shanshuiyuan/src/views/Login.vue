<template>
  <div class="main-contain">
    <div class="background">
      <img src="../assets/background.jpg" alt />
    </div>

    <div class="container">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="60px"
        class="demo-ruleForm form-contain"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" @keyup.enter="submitForm" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button style="width: 300px" type="primary" @click="submitForm()">登陆</el-button>
        </el-form-item>
        <span v-if="errorTip" style="color:red;">用户名或密码错误</span>
      </el-form>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

export default {
  name: "Login",
  data() {
    let checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      if (value.length < 3) {
        callback(new Error("用户名长度最少3位字符"));
      } else {
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      if (value.length < 6) {
        callback(new Error("密码长度最少6位字符"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        pass: ""
      },
      rules: {
        userName: [{ validator: checkUserName, trigger: "change" }],
        pass: [{ validator: validatePass, trigger: "change" }]
      },
      errorTip: false
    };
  },
  components: {},
  methods: {
    checkLogin() {
      axios.get("/users/checkLogin").then(response => {
        let res = response.data;
        let path = this.$route.pathname;
        if (res.status == "0") {
          this.$store.commit("updateUserInfo", res.result);
        } else {
          if (this.$route.path != "/") {
            this.$router.push("/");
          }
        }
      });
    },
    showlogin() {},
    submitForm() {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          this.login();
        } else {
          return false;
        }
      });
    },
    login() {
      axios
        .post("/users/login", {
          userName: this.ruleForm.userName,
          userPwd: this.ruleForm.pass
        })
        .then(response => {
          let res = response.data;
          if (res.status == "0") {
            this.$store.commit("updateUserInfo", res.result.userName);
            this.$store.commit("updateState", "/admin")
            this.$router.push("/admin");
          } else {
            this.errorTip = true;
          }
        });
    },
    logout() {
      axios.post("/users/logout").then(response => {
        let res = response.data;
        if (res.status == "0") {
          this.$store.commit("updateUserInfo", res.result.userName);
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-contain {
  width: 99%;
  position: relative;
}
.background img {
  width: 99%;
}
.container {
  position: absolute;
  top: 184px;
  right: 71px;
  border: 1px solid white;
  border-radius: 20px;
}
.form-contain {
  width: 360px;
  margin-top: 40px;
  padding: 30px;
  background-color: transparent;
  border-radius: 20px;
}
</style>
