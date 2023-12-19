<template>
  <div id="container">
    <div id="title">登录页面</div>
    <div class="input">
      <el-input
        v-model="name"
        prefix-icon="el-icon-user"
        placeholder="请输入用户名"
      ></el-input>
    </div>
    <div class="input">
      <el-input
        v-model="password"
        prefix-icon="el-icon-lock"
        placeholder="请输入密码"
        show-password
      ></el-input>
    </div>
    <div class="input">
      <el-button
        type="primary"
        @click="login"
        style="width: 500px"
        :disabled="disable"
        >登录</el-button
      >
    </div>
  </div>
</template>

<script>
import Storage from "@/store/Storage";
import { ElMessage } from "element-plus";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  computed: {
    disable() {
      return this.name.length == 0 || this.password.length == 0;
    },
  },
  methods: {
    login() {
      Storage.commit("registerUserInfo", {
        name: this.name,
        password: this.password,
      });
      ElMessage({
        message: "登陆成功",
        type: "success",
        duration: 300,
      });
      setTimeout(() => {
        this.$router.push({ name: "home" });
      }, 300);
    },
  },
};
</script>

<style scoped>
#container {
  background: #595959;
  background-image: url("../../assets\2.jpg");
  height: 100%;
  width: 100%;
  position: absolute;
}

#title {
  text-align: center;
  color: azure;
  margin-top: 200px;
}

.input {
  margin: 20px auto;
  width: 500px;
}
</style>
@/store/Storage
