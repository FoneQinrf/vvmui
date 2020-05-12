<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-12 17:11:27
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <demoTop gray text="Dialog">
    <section class="demo-button-row">
      <h3>Dialog提示</h3>
      <div class="cell">
        <Button @click="click">弹窗提示</Button>
        <Button @click="hiddenTitle">无标题内容</Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>底部按钮处理</h3>
      <div class="cell">
        <Button @click="button">展示取消按钮</Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>异步关闭</h3>
      <div class="cell">
        <Button @click="confirm">异步关闭</Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>自定义内容</h3>
      <div class="cell">
        <Button @click="renderContext">自定义内容</Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>组件调用方式</h3>
      <div class="cell">
        <Button @click="show = true">组件调用</Button>
      </div>
    </section>
    <Dialog :value="show" @input="show = false" context="提示内容" />
  </demoTop>
</template>

<script>
import Input from "@/../lib/components/Input";
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    click() {
      this.$Dialog.alert("我是提示消息");
    },
    hiddenTitle() {
      this.$Dialog.alert({
        context: "我是提示消息",
        showTitle: false
      });
    },
    button() {
      this.$Dialog.alert({
        context: "我是提示消息",
        showCancelButton: true
      });
    },
    confirm() {
      this.$Dialog.alert({
        context: "我是提示消息",
        showCancelButton: true,
        onConfirm: done => {
          setTimeout(done, 2000);
        }
      });
    },
    renderContext() {
      this.$Dialog.alert({
        showCancelButton: true,
        render: h => {
          return h(Input);
        }
      });
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
  .cell {
    display: flex;
    justify-content: space-between;
  }
}
</style>