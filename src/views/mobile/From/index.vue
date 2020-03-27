<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-10-22 15:44:57
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-26 16:00:50
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
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