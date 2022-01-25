import loginApi from "../api/login.js";

export default {
  namespaced: true,
  state: () => ({
    loading: false,
    userInfo: null,
  }),
  mutations: {
    updateLoading(state, isLoading) {
      state.loading = isLoading;
    },
    login(state, payload) {
      state.userInfo = payload;
    },
    logout(state) {
      state.userInfo = null;
    },
  },
  actions: {
    async loginAsync({ commit }, payload) {
      commit("updateLoading", true);
      const userInfo = await loginApi.login(payload);
      commit("login", userInfo);
      commit("updateLoading", false);
      return userInfo;
    },
    async logoutAsync({ commit }) {
      commit("updateLoading", true);
      await loginApi.logout();
      commit("logout");
      commit("updateLoading", false);
      return null;
    },
    async getUserInfoAsync({ commit }) {
      commit("updateLoading", true);
      const userInfo = await loginApi.getUserInfo();
      commit("login", userInfo);
      commit("updateLoading", false);
      return userInfo;
    },
  },
};
