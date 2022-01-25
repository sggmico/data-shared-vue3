<template>
  <div class="nav-container">
    <router-link class="router-link" to="/">首页 | </router-link>

    <span v-if="loading">loading...</span>

    <template v-else-if="userInfo">
      <span class="name">{{ "admin" }}</span>
      <el-button @click="logoutHandler">退出</el-button>
    </template>

    <router-link v-else class="router-link" to="/login">
      <el-button type="primary" plain>登录</el-button>
    </router-link>
  </div>

  <router-view></router-view>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const loading = computed(() => {
      return store.state.userStore.loading;
    });
    const userInfo = computed(() => {
      return store.state.userStore.userInfo;
    });
    const logoutHandler = async () => {
      await store.dispatch("userStore/logoutAsync");
      router.push("/login");
    };
    return {
      logoutHandler,
      loading,
      userInfo,
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
