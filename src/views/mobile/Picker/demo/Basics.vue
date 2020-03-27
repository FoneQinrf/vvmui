<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-27 11:39:53
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-27 10:45:42
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <Picker :options="options" key-value="label" />
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: "选项一" },
        { label: "选项二" },
        { label: "选项三" },
        { label: "选项四" },
        { label: "选项五" },
        { label: "选项六" },
        { label: "选项七" }
      ],
      model: {
        label: ""
      }
    };
  }
};
</script>