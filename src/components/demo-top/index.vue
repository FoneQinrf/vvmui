<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-26 11:28:08
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="demo-top">
    <div v-if="isMobile" class="context-wrp">
      <div class="context">
        <span @click="click" class="left">
          <Icon icon="iconxiangzuo" />
        </span>
        {{text}}
      </div>
    </div>
    <div :class="[gray ? 'demo-body gray' : 'demo-body', {isMobile: !isMobile}]">
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
  },
  computed: {
    isMobile() {
      /* eslint-disable */
      return parent && parent.window && parent.window.initState;
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
    &.isMobile {
      padding: 4px 0 5px 0;
    }
  }
}
</style>