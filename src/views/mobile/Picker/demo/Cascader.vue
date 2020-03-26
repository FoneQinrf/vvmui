<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-26 10:29:13
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-08-27 14:49:48
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <G-Picker :options="options" />
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "jiangsu",
          label: "浙江",
          children: [
            {
              value: "nanjing",
              label: "杭州",
              children: [
                {
                  value: "fuzimiao",
                  label: "西湖"
                }
              ]
            },
            {
              value: "suzhou",
              label: "宁波",
              children: [
                {
                  value: "zhuozhengyuan",
                  label: "老庙"
                },
                {
                  value: "shizilin",
                  label: "老街"
                }
              ]
            }
          ]
        },
        {
          value: "jiangsu",
          label: "江苏",
          children: [
            {
              value: "nanjing",
              label: "南京",
              children: [
                {
                  value: "fuzimiao",
                  label: "夫子庙"
                }
              ]
            },
            {
              value: "suzhou",
              label: "苏州",
              children: [
                {
                  value: "zhuozhengyuan",
                  label: "拙政园"
                },
                {
                  value: "shizilin",
                  label: "狮子林"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>