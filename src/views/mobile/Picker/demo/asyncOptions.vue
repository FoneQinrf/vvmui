<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:09:33
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <Picker @on-show="show" :options="options" />
</template>

<script>
export default {
  data() {
    return {
      options: []
    };
  },
  methods: {
    show() {
      const that = this;
      const t = setTimeout(function() {
        clearTimeout(t);
        that.options = [
          {
            value: "zhejiang",
            label: "浙江",
            children: [
              {
                value: "hangzhou",
                label: "杭州",
                children: [
                  {
                    value: "xihu",
                    label: "西湖"
                  }
                ]
              },
              {
                value: "ninbo",
                label: "宁波",
                children: [
                  {
                    value: "laomiao",
                    label: "老庙"
                  },
                  {
                    value: "laojie",
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
        ];
      }, 2000);
    }
  }
};
</script>