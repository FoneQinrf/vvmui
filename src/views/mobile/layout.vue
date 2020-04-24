<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-30 09:21:57
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 14:59:50
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->


<template>
  <transition name="fade" mode="out-in">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
    if (parent && parent.window && parent.window.initState) {
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