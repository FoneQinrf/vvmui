<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 14:37:05
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <demoTop gray text="Loading">
    <section class="demo-button-row">
      <h3>Loading用法</h3>
      <div class="cell">
        <Button @click="show">开启Loading</Button>
        <Button @click="context">展示内容</Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>LoadingBar用法</h3>
      <div class="cell">
        <Button @click="start">点击开始</Button>
        <Button @click="errer">errer</Button>
      </div>
    </section>
  </demoTop>
</template>

<script>
export default {
  methods: {
    show() {
      this.$Loading.spin.show();
      setTimeout(() => {
        this.$Loading.spin.hide();
      }, 3000);
    },
    context() {
      this.$Loading.spin.show("加载中...");
      setTimeout(() => {
        this.$Loading.spin.hide();
      }, 3000);
    },
    start() {
      this.$Loading.loadingBar.start();
      setTimeout(() => {
        this.$Loading.loadingBar.finish();
      }, 10000);
    },
    errer() {
      this.$Loading.loadingBar.start();
      setTimeout(() => {
        this.$Loading.loadingBar.errer();
      }, 10000);
    }
  }
};
</script>

<style lang="less" scoped>
.demo-button-row {
  padding: 0 15px;
  h3 {
    margin: 0;
    padding: 15px 0;
    color: #84849a;
    font-weight: normal;
    font-size: 14px;
  }
  .cell {
    display: flex;
    justify-content: space-between;
  }
}
</style>