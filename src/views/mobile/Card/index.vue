<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-13 16:47:34
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-13 17:53:15
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->
<template>
  <demoTop gray text="Card">
    <h3>基本用法</h3>
    <Card title-text="标题">
      <div :style="{height:'80px'}">自定义内容</div>
    </Card>
    <h3>自定义右上角内容</h3>
    <Card title-text="标题">
      <Icon slot="title-right" icon="icontime" />
      <div :style="{height:'80px'}">自定义内容</div>
    </Card>
    <h3>隐藏头部内容</h3>
    <Card :is-title="false">
      <div :style="{height:'80px'}">自定义内容</div>
    </Card>
    <h3>边框阴影</h3>
    <section :style="{padding:'20px',background: '#fff'}">
      <Card shadow title-text="标题">
        <div :style="{height:'80px'}">自定义内容</div>
      </Card>
    </section>
  </demoTop>
</template>

<style lang="less" scoped>
h3 {
  margin: 0;
  padding: 15px 0 15px 15px;
  color: #84849a;
  font-weight: normal;
  font-size: 14px;
}
</style>