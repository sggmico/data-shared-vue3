<template>
  <form>
    <div class="form-item">
      <label for="username">用户名：</label>
      <input type="text" v-model="username" />
    </div>
    <div class="form-item">
      <label for="password">密码：</label>
      <input type="password" v-model="password" />
    </div>
    <div class="form-item">
      <label></label>
      <el-button
        type="primary"
        @click="loginHandler"
        :loading="loginInfo.loading"
        >提交</el-button
      >
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
// 获取共享数据
import { loginInfo, loginAsync } from "../store/useLoginInfo.js";
export default {
  setup() {
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    // 登录
    const loginHandler = async () => {
      const userInfo = await loginAsync({
        username: username.value,
        password: password.value,
      });
      if (!userInfo) {
        alert("登录失败");
      } else {
        router.push("/");
      }
    };
    return {
      username,
      password,
      loginHandler,
      loginInfo,
    };
  },
};
</script>

<style>
.form-item {
  margin-top: 20px;
}
</style>
