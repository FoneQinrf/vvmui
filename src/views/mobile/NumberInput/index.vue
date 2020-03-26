<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-05 09:35:58
 * @LastEditors  : Fone丶峰
 * @LastEditTime : 2019-12-18 15:30:22
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <demoTop gray text="NumberInput">
    <G-Cell-Group title="使用方式">
      <G-Cell label="名称">
        <G-Number-Input align="right" />
      </G-Cell>
    </G-Cell-Group>
    <G-Cell-Group title="带单位">
      <G-Cell label="金额">
        <G-Number-Input unity="元" />
      </G-Cell>
    </G-Cell-Group>
    <G-Cell-Group title="使用icon">
      <G-Cell>
        <G-Number-Input icon="iconaccount" />
      </G-Cell>
    </G-Cell-Group>
    <G-Cell-Group title="禁用">
      <G-Cell label="名称">
        <G-Number-Input disabled />
      </G-Cell>
    </G-Cell-Group>
    <G-Cell-Group v-if="false" title="禁用">
      <G-Cell label="名称">
        <G-Number-Input disabled v-model="value" />
      </G-Cell>
    </G-Cell-Group>
  </demoTop>
</template>

<script>
export default {
  data() {
    return {
      value: "123456"
    };
  }
};
</script>