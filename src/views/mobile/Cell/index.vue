<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 14:53:18
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:07:44
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
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