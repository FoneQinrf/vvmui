<!--
 * @Author: Fone丶峰
 * @Date: 2019-11-06 14:03:19
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-06 17:11:29
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <demoTop gray text="Collapse">
    <h3>基本用法</h3>
    <Collapse-Group>
      <Collapse name="1" title="标题一">默认可展开多个</Collapse>
      <Collapse name="2" title="标题二">默认可展开多个</Collapse>
    </Collapse-Group>
    <h3>手风琴</h3>
    <Collapse-Group accordion>
      <Collapse name="1" title="标题一">accordion开启手风琴模式</Collapse>
      <Collapse name="2" title="标题二">accordion开启手风琴模式</Collapse>
      <Collapse name="3" title="标题三">accordion开启手风琴模式</Collapse>
    </Collapse-Group>
    <h3>自定义标题</h3>
    <Collapse-Group accordion>
      <Collapse name="1">
        <template slot="title">
          <span style="padding-right:8px">标题一</span>
          <Icon icon="iconinfo" />
        </template>
        <template>自定义标题的内容将覆盖title字段的内容</template>
      </Collapse>
      <Collapse name="2" title="标题二">自定义标题的内容将覆盖title字段的内容</Collapse>
    </Collapse-Group>
  </demoTop>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
h3 {
  margin: 0;
  padding: 15px 0 15px 15px;
  color: #84849a;
  font-weight: normal;
  font-size: 14px;
}
</style>