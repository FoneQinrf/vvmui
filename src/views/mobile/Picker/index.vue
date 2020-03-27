<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-22 17:38:55
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-27 11:42:51
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <demoTop gray text="Picker">
    <G-Cell-Group title="基本用法">
      <G-Cell label="选择内容">
        <template>
          <Basics />
        </template>
      </G-Cell>
    </G-Cell-Group>
    <G-Cell-Group title="联动用法">
      <G-Cell label="选择内容">
        <template>
          <Cascader />
        </template>
      </G-Cell>
    </G-Cell-Group>
    <G-Cell-Group v-if="false" title="数据绑定">
      <G-Cell label="选择内容">
        <template>
          <Model />
        </template>
      </G-Cell>
    </G-Cell-Group>
    <G-Cell-Group title="数据绑定">
      <G-Cell label="选择内容">
        <template>
          <setValue />
        </template>
      </G-Cell>
    </G-Cell-Group>
    <G-Cell-Group title="禁用">
      <G-Cell label="选择内容">
        <template>
          <disabled />
        </template>
      </G-Cell>
    </G-Cell-Group>
    <G-Cell-Group title="异步options">
      <G-Cell label="选择内容">
        <template>
          <asyncOptions />
        </template>
      </G-Cell>
    </G-Cell-Group>
    <G-Cell-Group title="异步value数据">
      <G-Cell label="选择内容">
        <template>
          <asyncValue />
        </template>
      </G-Cell>
    </G-Cell-Group>
    <G-Cell-Group v-if="false" title="测试异步model">
      <G-Cell label="选择内容">
        <template>
          <asyncModel />
        </template>
      </G-Cell>
    </G-Cell-Group>
  </demoTop>
</template>

<script>
import Cascader from "./demo/Cascader";
import setValue from "./demo/setValue";
import Basics from "./demo/Basics";
import Model from "./demo/model";
import disabled from "./demo/disabled";
import asyncOptions from "./demo/asyncOptions";
import asyncValue from "./demo/asyncValue";
import asyncModel from "./demo/asyncModel";
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