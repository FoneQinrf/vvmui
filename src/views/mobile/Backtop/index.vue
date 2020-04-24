<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-23 15:03:12
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 09:59:44
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <demoTop gray text="Backtop">
    <h3>空内容</h3>
    <div style="height:200px">
      <h4>空内容</h4>
    </div>
    <div style="height:200px">
      <h4>空内容</h4>
    </div>
    <div style="height:200px">
      <h4>空内容</h4>
    </div>
    <div style="height:200px">
      <h4>空内容</h4>
    </div>
    <Backtop target=".demo-body.gray">
      <Icon icon="icon15" />
    </Backtop>
    <Backtop :bottom="44" :visibility-height="200" target=".demo-body.gray">
      <p>top</p>
    </Backtop>
  </demoTop>
</template>