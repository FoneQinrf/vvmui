<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-08 09:48:03
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-13 16:39:02
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <demoTop gray text="Picker">
    <Cell-Group title="基本用法">
      <Cell label="选择内容">
        <template>
          <Basics />
        </template>
      </Cell>
    </Cell-Group>
    <Cell-Group title="联动用法">
      <Cell label="选择内容">
        <template>
          <Cascader />
        </template>
      </Cell>
    </Cell-Group>
    <Cell-Group v-if="false" title="数据绑定">
      <Cell label="选择内容">
        <template>
          <Model />
        </template>
      </Cell>
    </Cell-Group>
    <Cell-Group title="数据绑定">
      <Cell label="选择内容">
        <template>
          <setValue />
        </template>
      </Cell>
    </Cell-Group>
    <Cell-Group title="禁用">
      <Cell label="选择内容">
        <template>
          <disabled />
        </template>
      </Cell>
    </Cell-Group>
    <Cell-Group title="异步options">
      <Cell label="选择内容">
        <template>
          <asyncOptions />
        </template>
      </Cell>
    </Cell-Group>
    <Cell-Group title="异步value数据">
      <Cell label="选择内容">
        <template>
          <asyncValue />
        </template>
      </Cell>
    </Cell-Group>
    <Cell-Group v-if="false" title="测试异步model">
      <Cell label="选择内容">
        <template>
          <asyncModel />
        </template>
      </Cell>
    </Cell-Group>
  </demoTop>
</template>

<script>
import Cascader from "./demo/Cascader.vue";
import setValue from "./demo/setValue.vue";
import Basics from "./demo/Basics.vue";
import Model from "./demo/model.vue";
import disabled from "./demo/disabled.vue";
import asyncOptions from "./demo/asyncOptions.vue";
import asyncValue from "./demo/asyncValue.vue";
import asyncModel from "./demo/asyncModel.vue";
export default {
  components: {
    Cascader,
    setValue,
    Basics,
    Model,
    disabled,
    asyncOptions,
    asyncValue,
    asyncModel
  }
};
</script>