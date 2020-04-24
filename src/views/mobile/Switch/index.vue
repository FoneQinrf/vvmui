<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-02 10:04:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-23 18:22:14
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->


<template>
  <demoTop gray text="Switch">
    <section class="demo-Switch-row">
      <h3>基本用法</h3>
      <div class="cell">
        <v-Switch />
        <v-Switch type="success" />
        <v-Switch type="warning" />
        <v-Switch type="errer" />
      </div>
    </section>
    <section class="demo-Switch-row">
      <h3>绑定值</h3>
      <div class="cell">
        <v-Switch v-model="value" />
      </div>
    </section>
    <section class="demo-Switch-row">
      <h3>自定义返回值</h3>
      <div class="cell">
        <v-Switch :active-value="1" :inactive-value="0" @on-change="change" />
      </div>
    </section>
    <section class="demo-Switch-row">
      <h3>禁用</h3>
      <div class="cell">
        <v-Switch disabled />
        <v-Switch disabled v-model="value" />
      </div>
    </section>
  </demoTop>
</template>

<script>
export default {
  data() {
    return {
      value: true
    };
  },
  methods: {
    change(val) {
      this.$Toast.info(`变化的值：${val}`);
    }
  }
};
</script>

<style lang="less" scoped>
.demo-Switch-row {
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