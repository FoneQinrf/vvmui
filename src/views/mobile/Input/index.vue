<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-05 09:35:58
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-11-05 10:33:23
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <demoTop gray text="Input">
    <G-Cell-Group title="使用方式">
      <G-Cell label="内容一">
        <G-Input />
      </G-Cell>
    </G-Cell-Group>
    <G-Cell-Group title="使用icon">
      <G-Cell>
        <G-Input icon="iconaccount" />
      </G-Cell>
    </G-Cell-Group>
    <G-Cell-Group title="设置右边展示icon">
      <G-Cell label="手机号码">
        <G-Input @on-click="click" right-icon="iconinfo" />
      </G-Cell>
    </G-Cell-Group>
    <G-Cell-Group title="展示单位">
      <G-Cell label="金额">
        <G-Input unity="元" />
      </G-Cell>
    </G-Cell-Group>
    <G-Cell-Group title="禁用">
      <G-Cell label="金额">
        <G-Input disabled unity="元" />
      </G-Cell>
    </G-Cell-Group>
  </demoTop>
</template>
<script>
export default {
  methods: {
    click() {
      this.$Toast.info("消息");
    }
  }
};
</script>