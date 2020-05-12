<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-09 14:08:28
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <demoTop gray text="Dialog">
    <section class="demo-button-row">
      <h3>使用方式</h3>
      <div class="cell">
        <Button @click="top = true">上模态窗</Button>
        <Button @click="bottom = true">下模态窗</Button>
      </div>
    </section>
    <br />
    <section class="demo-button-row">
      <div class="cell">
        <Button @click="left = true">左模态窗</Button>
        <Button @click="right = true">右模态窗</Button>
      </div>
    </section>
    <br />
    <section class="demo-button-row">
      <div class="cell">
        <Button @click="center = true">居中模态窗</Button>
      </div>
    </section>
    <Model v-model="top" isClickMask direction="top">
      <div class="model" style="height:200px;width:100%"></div>
    </Model>
    <Model v-model="bottom" isClickMask direction="bottom">
      <div class="model" style="height:200px;width:100%"></div>
    </Model>
    <Model v-model="left" isClickMask direction="left">
      <div class="model" style="height:100%;width:100px"></div>
    </Model>
    <Model v-model="right" isClickMask direction="right">
      <div class="model" style="height:100%;width:100px"></div>
    </Model>
    <Model v-model="center" isClickMask direction="center">
      <div class="model" style="height:100px;width:100px"></div>
    </Model>
  </demoTop>
</template>

<script>
export default {
  data() {
    return {
      top: false,
      bottom: false,
      left: false,
      right: false,
      center: false
    };
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
.model {
  background: #fff;
}
</style>