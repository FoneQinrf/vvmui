<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-30 09:21:57
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-14 10:34:01
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
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
<style lang="less">
body {
  user-select: none;
}
#app {
  overflow-y: auto;
  min-height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>