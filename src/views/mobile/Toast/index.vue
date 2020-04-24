<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 15:40:39
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->


<template>
  <demoTop gray text="Toast">
    <section class="demo-button-row">
      <h3>Toast用法</h3>
      <div class="cell">
        <Button @click="click">Toast info</Button>
        <Button @click="success" type="success">Toast success</Button>
      </div>
      <div class="cell" style="padding:15px 0 0 0;">
        <Button @click="warning" type="warning">Toast warning</Button>
        <Button @click="errer" type="errer">Toast errer</Button>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>自定义用法</h3>
      <div class="cell">
        <Button @click="iconfont">自定义icon</Button>
        <!--<Button @click="close">关闭自动关闭</Button>-->
        <Button @click="duration">自定义关闭时长</Button>
      </div>
      <div class="cell" style="padding:15px 0 0 0;">
        <Button @click="mask">开启蒙层</Button>
      </div>
    </section>
  </demoTop>
</template>

<script>
export default {
  methods: {
    click() {
      this.$Toast.info("提示消息");
    },
    success() {
      this.$Toast.success("成功");
    },
    warning() {
      this.$Toast.warning("警告");
    },
    errer() {
      this.$Toast.errer("错误");
    },
    iconfont() {
      this.$Toast.success({
        icon: "iconuncheck",
        context: "成功"
      });
    },
    mask() {
      this.$Toast.success({
        mask: true,
        context: "成功",
        duration: 5000
      });
    },
    close() {
      this.$Toast.success({
        duration: 0,
        context: "成功"
      });
    },
    duration() {
      this.$Toast.success({
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