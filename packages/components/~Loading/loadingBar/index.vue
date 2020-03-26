<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-09-26 15:09:05
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-11-07 13:59:17
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <transition>
    <div class="g7-Loading-loadingBar" v-show="show">
      <div :class="['g7-loadingBar',status]" :style="style"></div>
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