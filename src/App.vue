<template>
  <div class="nav-container">
    <router-link class="router-link" to="/">首页</router-link>
    <span>loading...</span>
    <span class="login">
      <span>{{'admin'}}</span>
      <el-button>退出</el-button>
    </span>
    <router-link class="router-link" to='/login'>
      <el-button type="primary">登录</el-button>
    </router-link>
  </div>
  <router-view></router-view>
</template>
<script setup>
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
</style>
