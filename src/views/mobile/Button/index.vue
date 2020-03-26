<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-09-02 10:22:38
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-09-30 15:24:33
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->

<template>
  <demoTop gray text="Button">
    <section class="demo-button-row">
      <h3>基本用法</h3>
      <div class="cell">
        <G-Button>主要按钮</G-Button>
        <G-Button type="success">成功按钮</G-Button>
      </div>
      <div class="cell" style="padding:15px 0 0 0;">
        <G-Button type="warning">警告按钮</G-Button>
        <G-Button type="errer">错误按钮</G-Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>字体</h3>
      <div class="cell">
        <G-Button type="text">字体按钮</G-Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>空心按钮</h3>
      <div class="cell">
        <G-Button plain>主要按钮</G-Button>
        <G-Button plain type="success">成功按钮</G-Button>
      </div>
      <div class="cell" style="padding:15px 0 0 0;">
        <G-Button plain type="warning">警告按钮</G-Button>
        <G-Button plain type="errer">错误按钮</G-Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>圆角按钮</h3>
      <div class="cell">
        <G-Button plain round>主要按钮</G-Button>
        <G-Button plain round type="success">成功按钮</G-Button>
      </div>
      <div class="cell" style="padding:15px 0 0 0;">
        <G-Button plain round type="warning">警告按钮</G-Button>
        <G-Button plain round type="errer">错误按钮</G-Button>
      </div>
      <div class="cell" style="padding:15px 0 0 0;">
        <G-Button round>主要按钮</G-Button>
        <G-Button round type="success">成功按钮</G-Button>
      </div>
      <div class="cell" style="padding:15px 0 0 0;">
        <G-Button round type="warning">警告按钮</G-Button>
        <G-Button round type="errer">错误按钮</G-Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>按钮大小</h3>
      <div>
        <G-Button long>按钮</G-Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>页面导航</h3>
      <div class="cell">
        <G-Button to="/mobile/Input">路由跳转</G-Button>
        <G-Button url="index.html">URL跳转</G-Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>配合icon使用</h3>
      <div class="cell">
        <G-Button>
          <G-Icon icon="iconbianji" style="padding-right:5px" />按 钮
        </G-Button>
        <G-Button>
          按 钮
          <G-Icon icon="iconcamera" />
        </G-Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>loading</h3>
      <div class="cell">
        <G-Button loading></G-Button>
        <G-Button loading type="success">主要按钮</G-Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>禁用</h3>
      <div class="cell">
        <G-Button disabled>主要按钮</G-Button>
        <G-Button disabled type="success">主要按钮</G-Button>
      </div>
    </section>
  </demoTop>
</template>

<script>
export default {};
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
  .cell {
    display: flex;
    justify-content: space-between;
  }
}
</style>