<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-21 18:04:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-10-22 14:14:08
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <demoTop gray text="Cell">
    <G-Cell-Group title="基本用法">
      <G-Cell label="单元格" context="内容" />
      <G-Cell label="单元格" context="内容" />
    </G-Cell-Group>
    <G-Cell-Group title="block模式">
      <G-Cell model="block" label="内容一" context="内容" />
      <G-Cell model="block" label="内容二" context="内容" />
    </G-Cell-Group>
    <G-Cell-Group title="导航用法">
      <G-Cell label="路由跳转" to="/mobile/Input" />
      <G-Cell label="页面跳转" url="index.html" />
    </G-Cell-Group>
  </demoTop>
</template>