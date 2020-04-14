<!--
 * @Author: Fone丶峰
 * @Date: 2019-11-06 14:03:19
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-13 16:39:43
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <demoTop gray text="From">
    <FromA />
    <FromB />
    <FromC />
    <FromD />
  </demoTop>
</template>

<script>
import FromA from "./components/test1.vue";
import FromB from "./components/test2.vue";
import FromC from "./components/test3.vue";
import FromD from "./components/test4.vue";
export default {
  components: { FromA, FromB, FromC, FromD },
  data() {
    return {};
  }
};
</script>