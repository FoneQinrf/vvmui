<!--
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-21 17:46:47
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
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
        <Number-Input align="right" unity="元" />
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
    <Cell-Group title="v-model使用">
      <Cell label="金额">
        <Number-Input v-model="value" />
      </Cell>
    </Cell-Group>
  </demoTop>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>