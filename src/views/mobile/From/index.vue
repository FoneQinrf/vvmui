<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-10-22 15:44:57
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-25 16:12:40
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <demoTop gray text="From">
    <FromA />
    <FromB />
  </demoTop>
</template>

<script>
import FromA from "./components/test1";
import FromB from "./components/test2";
export default {
  components: { FromA, FromB },
  data() {
    return {};
  }
};
</script>