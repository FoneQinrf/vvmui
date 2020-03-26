<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-02 17:54:46
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-11-08 17:24:30
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>
<script>
export default {
  mounted() {
    window.addEventListener(
      "message",
      e => {
        const name = e.data.name
          ? e.data.name
          : window.localStorage.getItem("name");
        this.$router.replace(`/mobile/${name}`);
      },
      false
    );
  }
};
</script>
<style>
body {
  user-select: none;
}
</style>