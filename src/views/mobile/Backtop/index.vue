<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-23 15:03:12
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-26 10:29:33
 * @Description: 
 * @Email: qinrifeng@g7.com.cn
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
      <i class="iconfont icon15"></i>
    </Backtop>
    <Backtop :bottom="44" :visibility-height="200" target=".demo-body.gray">
      <p>top</p>
    </Backtop>
  </demoTop>
</template>