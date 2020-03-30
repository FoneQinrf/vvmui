
<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-02 17:54:46
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-30 09:50:43
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>
<script>
//console.log(window.routerFnc());
export default {
  mounted() {
    window.routerFnc = name => {
      this.$router.replace(`/mobile/${name}`);
    };
    /* eslint-disable */
    if (parent) {
      parent.window.initState();
    }
    /* eslint-disable */
  }
};
</script>
<style>
body {
  user-select: none;
}
</style>