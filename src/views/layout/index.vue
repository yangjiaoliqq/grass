<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">借款</van-tabbar-item>
      <van-tabbar-item icon="search" to="credit">信用</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="user">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
</style>