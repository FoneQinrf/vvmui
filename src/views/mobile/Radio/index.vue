<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-10-30 13:34:03
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-31 15:46:46
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <demoTop gray text="Radio">
    <section class="demo-button-row">
      <h3>基本用法</h3>
      <div class="cell">
        <Radio>单选框</Radio>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>type类型</h3>
      <div class="cell">
        <Radio-Group inline>
          <Radio type="errer" label="errer" />
          <Radio type="success" label="success" />
          <Radio type="warning" label="warning" />
        </Radio-Group>
      </div>
    </section>
    <section v-if="false" class="demo-button-row">
      <h3>测试数字</h3>
      <div class="cell">
        <Radio-Group v-model="value1" inline>
          <Radio :label="0" />
          <Radio :label="1" />
          <Radio :label="2" />
        </Radio-Group>
      </div>
    </section>
    <section v-if="false" class="demo-button-row">
      <h3>测试数字</h3>
      <div class="cell">
        <Radio v-model="value1" :label="0">单选框</Radio>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>配合RadioGroup使用</h3>
      <div class="cell">
        <Radio-Group inline>
          <Radio label="单选框1" />
          <Radio label="单选框2" />
          <Radio label="单选框3" />
        </Radio-Group>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>自定义图标</h3>
      <div class="cell">
        <Radio-Group inline>
          <Radio icon="iconselected" label="单选框1" />
          <Radio icon="iconselected" label="单选框2" />
          <Radio icon="iconselected" label="单选框3" />
        </Radio-Group>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>配合icon使用</h3>
      <div class="cell">
        <Radio-Group inline>
          <Radio label="单选框1">
            <Icon icon="iconaccount" />单选框1
          </Radio>
          <Radio label="单选框2">
            <Icon icon="iconcamera" />单选框2
          </Radio>
        </Radio-Group>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>禁用</h3>
      <div class="cell">
        <Radio disabled>单选框</Radio>
        <Radio v-model="value" disabled>单选框</Radio>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>使用RadioGroup禁用</h3>
      <div class="cell">
        <Radio-Group v-model="label" disabled inline>
          <Radio label="单选框1" />
          <Radio label="单选框2" />
          <Radio label="单选框3" />
        </Radio-Group>
      </div>
    </section>
  </demoTop>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      label: "单选框1",
      value1: 0
    };
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