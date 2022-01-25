<template>
  <div class="nav-container">
    <router-link class="router-link" to="/">首页 | </router-link>

    <span v-if="loginInfo.loading">loading...</span>

    <template v-else-if="loginInfo.userInfo">
      <span class="name">{{ loginInfo.userInfo.username }}</span>
      <el-button @click="logoutHandler">退出</el-button>
    </template>

    <router-link v-else class="router-link" to="/login">
      <el-button type="primary" plain>登录</el-button>
    </router-link>
  </div>

  <router-view></router-view>
</template>
<script>
import { inject } from "vue";
import { useRouter } from "vue-router";
import { useLoginInfo } from "./store/useLoginInfo.js";
export default {
  setup() {
    console.log(inject("name"));
    const router = useRouter();
    // 获取共享数据
    const { state, logoutAsync, getUserInfoAsync } = useLoginInfo();

    // 退出
    const logoutHandler = async () => {
      await logoutAsync();
      router.push("/login");
    };

    // 获取用户信息
    getUserInfoAsync().then((data) => {
      if (data) {
        router.push("/");
      }
    });

    return {
      logoutHandler,
      loginInfo: state,
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link {
  text-decoration: none;
}
.name {
  margin-right: 10px;
}
</style>
