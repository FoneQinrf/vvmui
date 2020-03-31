<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-05 09:35:58
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-31 11:10:33
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <demoTop gray text="NumberInput">
    <Cell-Group title="使用方式">
      <Cell label="名称">
        <Number-Input align="right" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="带单位">
      <Cell label="金额">
        <Number-Input unity="元" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="使用icon">
      <Cell>
        <Number-Input icon="iconaccount" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="禁用">
      <Cell label="名称">
        <Number-Input disabled />
      </Cell>
    </Cell-Group>
    <Cell-Group v-if="false" title="禁用">
      <Cell label="名称">
        <Number-Input disabled v-model="value" />
      </Cell>
    </Cell-Group>
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