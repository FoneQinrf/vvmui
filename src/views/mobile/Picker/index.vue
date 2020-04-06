<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-22 17:38:55
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-04 21:19:28
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
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