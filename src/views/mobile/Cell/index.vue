<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-21 18:04:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-30 14:17:51
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <demoTop gray text="Cell">
    <Cell-Group title="基本用法">
      <Cell label="单元格" context="内容" />
      <Cell label="单元格" context="内容" />
    </Cell-Group>
    <Cell-Group title="展示icon">
      <Cell icon="iconaccount" label="内容一" context="内容" />
      <Cell icon="iconrejected" label="内容二" context="内容" />
    </Cell-Group>
    <Cell-Group title="block模式">
      <Cell model="block" label="内容一" context="内容" />
      <Cell model="block" label="内容二" context="内容" />
    </Cell-Group>
    <Cell-Group title="导航用法">
      <Cell label="路由跳转" to="/mobile/Input" />
      <Cell label="页面跳转" url="index.html" />
    </Cell-Group>
    <Cell-Group title="插槽自定义内容">
      <Cell model="block">
        <template slot="label">自定义label</template>
        <template>自定义内容</template>
      </Cell>
    </Cell-Group>
  </demoTop>
</template>