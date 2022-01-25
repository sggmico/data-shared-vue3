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
      <el-button type="primary" @click="loginHandler" :loading="loading"
        >提交</el-button
      >
    </div>
  </form>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    // 获取共享数据
    const store = useStore();
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    // 登录
    const loginHandler = async () => {
      const userInfo = await store.dispatch("userStore/loginAsync", {
        username: username.value,
        password: password.value,
      });
      if (!userInfo) {
        alert("登录失败");
      } else {
        router.push("/");
      }
    };
    // loading
    const loading = computed(() => {
      return store.state.userStore.loading;
    });
    return {
      username,
      password,
      loginHandler,
      loading,
    };
  },
};
</script>

<style>
.form-item {
  margin-top: 20px;
}
</style>
