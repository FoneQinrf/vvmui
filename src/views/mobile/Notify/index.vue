<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-27 13:55:50
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->


<template>
  <demoTop gray text="Notify">
    <section class="demo-button-row">
      <h3>基本用法</h3>
      <div class="cell">
        <Button @click="click">Notify info</Button>
        <Button @click="success" type="success">Notify success</Button>
      </div>
      <div class="cell" style="padding:15px 0 0 0;">
        <Button @click="warning" type="warning">Notify warning</Button>
        <Button @click="errer" type="errer">Notify errer</Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>自定义用法</h3>
      <div class="cell">
        <Button @click="iconfont">自定义icon</Button>
        <!--<Button @click="close">关闭自动关闭</Button>-->
        <Button @click="duration">自定义关闭时长</Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>手动关闭</h3>
      <div class="cell">
        <Button @click="close">消 息</Button>
      </div>
    </section>
  </demoTop>
</template>

<script>
export default {
  methods: {
    click() {
      this.$Notify.info("info");
    },
    success() {
      this.$Notify.success("成功");
    },
    warning() {
      this.$Notify.warning("警告");
    },
    errer() {
      this.$Notify.errer("错误");
    },
    iconfont() {
      this.$Notify.success({
        icon: "iconinfo",
        context: "成功"
      });
    },
    close() {
      const el = this.$Notify.success("消息");
      setTimeout(() => {
        el.close();
      }, 2000);
    },
    duration() {
      this.$Notify.success({
        duration: 5000,
        context: "成功"
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