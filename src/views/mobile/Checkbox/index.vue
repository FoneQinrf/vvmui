<!--
 * @Author: Fone丶峰
 * @Date: 2020-01-02 15:44:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-25 10:18:53
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->
<template>
  <demoTop gray text="Checkbox">
    <section class="demo-button-row">
      <h3>基本用法</h3>
      <div class="cell">
        <Checkbox>选项</Checkbox>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>type类型</h3>
      <div class="cell">
        <Checkbox-Group>
          <Checkbox type="default" label="default"></Checkbox>
          <Checkbox type="errer" label="errer"></Checkbox>
          <Checkbox type="success" label="success"></Checkbox>
          <Checkbox type="warning" label="warning"></Checkbox>
        </Checkbox-Group>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>搭配CheckboxGroup使用</h3>
      <div class="cell">
        <Checkbox-Group>
          <Checkbox label="选项一" />
          <Checkbox label="选项二" />
          <Checkbox label="选项三" />
        </Checkbox-Group>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>v-model绑定</h3>
      <div class="cell">
        <Checkbox-Group v-model="model">
          <Checkbox label="选项一" />
          <Checkbox label="选项二" />
          <Checkbox label="选项三" />
        </Checkbox-Group>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>禁用</h3>
      <div class="cell">
        <Checkbox-Group :value="['选项二']">
          <Checkbox disabled label="选项一" />
          <Checkbox disabled label="选项二" />
          <Checkbox label="选项三" />
        </Checkbox-Group>
      </div>
    </section>
    <section v-if="false" class="demo-button-row">
      <h3>禁用</h3>
      <div class="cell">
        <Checkbox-Group disabled :value="['选项二']">
          <Checkbox label="选项一" />
          <Checkbox label="选项二" />
          <Checkbox label="选项三" />
        </Checkbox-Group>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>CheckboxGroup的type属性</h3>
      <div class="cell">
        <Checkbox-Group type="success" :value="values">
          <Checkbox label="选项一" />
          <Checkbox label="选项二" />
          <Checkbox label="选项三" />
        </Checkbox-Group>
      </div>
    </section>
    <section v-if="false" class="demo-button-row">
      <h3>禁用</h3>
      <div class="cell">
        <Checkbox-Group icon="iconradioactive" :value="['选项二']">
          <Checkbox label="选项一" />
          <Checkbox label="选项二" />
          <Checkbox label="选项三" />
        </Checkbox-Group>
      </div>
    </section>
    <section v-if="false" class="demo-button-row">
      <h3>测试数字label</h3>
      <div class="cell">
        <Checkbox-Group icon="iconradioactive" :value="[0]">
          <Checkbox :label="0" />
          <Checkbox :label="1" />
          <Checkbox :label="2" />
        </Checkbox-Group>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>change事件</h3>
      <div class="cell">
        <Checkbox-Group @on-change="change">
          <Checkbox label="选项一" />
          <Checkbox label="选项二" />
          <Checkbox label="选项三" />
        </Checkbox-Group>
      </div>
    </section>
  </demoTop>
</template>

<script>
export default {
  data() {
    return {
      model: ["选项二"],
      value: 0,
      values: ["选项二"]
    };
  },
  methods: {
    change(val) {
      this.$Toast.info(`选中：${val}`);
    }
  }
};
</script>

<style lang="less" scoped>
.demo-button-row {
  padding: 0 15px;
  h3 {
    margin: 0;
    padding: 15px 0;
    color: #84849a;
    font-weight: normal;
    font-size: 14px;
  }
}
</style>