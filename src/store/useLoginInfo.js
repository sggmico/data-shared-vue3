import { reactive, readonly } from "vue";
import loginApi from "../api/login.js";

// 全局数据
const state = reactive({
  userInfo: null,
  loading: false,
});

// 对外暴露只读全局数据
export const loginInfo = readonly(state);

export async function loginAsync(payload) {
  state.loading = true;
  const userInfo = await loginApi.login(payload);
  state.userInfo = userInfo;
  state.loading = false;
  return userInfo;
}
export async function logoutAsync() {
  state.loading = true;
  await loginApi.logout();
  state.userInfo = null;
  state.loading = false;
  return null;
}
export async function getUserInfoAsync() {
  state.loading = true;
  const userInfo = await loginApi.getUserInfo();
  state.userInfo = userInfo;
  state.loading = false;
  return userInfo;
}
