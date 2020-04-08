<!--
 * @Author: Fone丶峰
 * @Date: 2019-11-06 14:03:19
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:07:58
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
import FromA from "./components/test1";
import FromB from "./components/test2";
import FromC from "./components/test3";
import FromD from "./components/test4";
export default {
  components: { FromA, FromB, FromC, FromD },
  data() {
    return {};
  }
};
</script>