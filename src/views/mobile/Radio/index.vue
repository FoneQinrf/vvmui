<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-10-30 13:34:03
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-11-04 15:29:09
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <demoTop gray text="Radio">
    <section class="demo-button-row">
      <h3>基本用法</h3>
      <div class="cell">
        <G-Radio>单选框</G-Radio>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>配合RadioGroup使用</h3>
      <div class="cell">
        <G-Radio-Group inline>
          <G-Radio label="单选框1" />
          <G-Radio label="单选框2" />
          <G-Radio label="单选框3" />
        </G-Radio-Group>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>自定义图标</h3>
      <div class="cell">
        <G-Radio-Group inline>
          <G-Radio icon="iconselected" label="单选框1" />
          <G-Radio icon="iconselected" label="单选框2" />
          <G-Radio icon="iconselected" label="单选框3" />
        </G-Radio-Group>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>配合icon使用</h3>
      <div class="cell">
        <G-Radio-Group inline>
          <G-Radio label="单选框1">
            <G-Icon icon="iconaccount" />单选框1
          </G-Radio>
          <G-Radio label="单选框2">
            <G-Icon icon="iconcamera" />单选框2
          </G-Radio>
        </G-Radio-Group>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>禁用</h3>
      <div class="cell">
        <G-Radio disabled>单选框</G-Radio>
        <G-Radio v-model="value" disabled>单选框</G-Radio>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>使用RadioGroup禁用</h3>
      <div class="cell">
        <G-Radio-Group v-model="label" disabled inline>
          <G-Radio label="单选框1" />
          <G-Radio label="单选框2" />
          <G-Radio label="单选框3" />
        </G-Radio-Group>
      </div>
    </section>
  </demoTop>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      label: "单选框1"
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