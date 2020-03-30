<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-16 13:33:05
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-30 11:15:27
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div class="demo-top">
    <div class="context-wrp">
      <div class="context">
        <span @click="click" class="left">
          <Icon icon="iconxiangzuo" />
        </span>
        {{text}}
      </div>
    </div>
    <div :class="[gray ? 'demo-body gray' : 'demo-body']">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: {},
    gray: {
      type: Boolean
    }
  },
  methods: {
    click() {
      this.$router.go(-1);
      /* eslint-disable */
      //if (parent) {
        //parent.window.routerPush();
      //}
      /* eslint-disable */
    }
  }
};
</script>
<style lang="less" scoped>
.demo-top {
  width: 100%;
  height: 100%;
  .context-wrp {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 1;
    box-shadow: 1px 2px 3px #e0e0eb;
    .context {
      padding: 15px 0;
      text-align: center;
      position: relative;
      .left {
        position: absolute;
        left: 10px;
        cursor: pointer;
      }
    }
  }
  .demo-body {
    padding: 54px 0 5px 0;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    &::-webkit-scrollbar {
      display: none;
    }
    &.gray {
      background: #f2f2f4;
    }
  }
}
</style>