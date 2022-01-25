import { reactive, readonly, inject } from "vue";
import loginApi from "../api/login.js";

const key = Symbol();

/**
 * 应用级别 -- 注入共享数据；
 * @param {*} app
 */
export function provideLoginInfo(app) {
  // 全局数据
  const state = reactive({
    userInfo: null,
    loading: false,
  });

  async function loginAsync(payload) {
    state.loading = true;
    const userInfo = await loginApi.login(payload);
    state.userInfo = userInfo;
    state.loading = false;
    return userInfo;
  }
  async function logoutAsync() {
    state.loading = true;
    await loginApi.logout();
    state.userInfo = null;
    state.loading = false;
    return null;
  }
  async function getUserInfoAsync() {
    state.loading = true;
    const userInfo = await loginApi.getUserInfo();
    state.userInfo = userInfo;
    state.loading = false;
    return userInfo;
  }
  app.provide(key, {
    state: readonly(state), // 暴露只读共享数据
    loginAsync,
    logoutAsync,
    getUserInfoAsync,
  });
}

/**
 * 获取共享数据
 * @param {*} defaultData
 * @returns
 */
export function useLoginInfo(defaultData = {}) {
  return inject(key, defaultData);
}
