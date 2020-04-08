<!--
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 09:56:48
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <transition>
    <div class="Am-Loading-loadingBar" v-show="show">
      <div :class="['Am-loadingBar',status]" :style="style"></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean
    },
    percent: {
      type: Number
    },
    status: {
      type: String,
      validator: function(value) {
        return ["errer", "success"].includes(value);
      }
    }
  },
  computed: {
    style() {
      const { percent } = this;
      return { width: `${percent}%` };
    }
  }
};
</script>