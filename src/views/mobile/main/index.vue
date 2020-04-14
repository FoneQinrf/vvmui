<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-14 11:02:58
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="Amui-home">
    <div class="logo"></div>
    <Card v-for="(item,$index) in options" :key="$index" shadow :title-text="item.name">
      <div class="body-wrp">
        <Cell-Group>
          <Cell
            v-for="opt in item.children"
            :key="opt.name"
            :label="opt.name"
            :reture-value="opt"
            @on-click="click"
          >
            <Icon icon="iconlist-rigthl" />
          </Cell>
        </Cell-Group>
      </div>
    </Card>
  </div>
</template>

<script>
import list from "@/utils/navList";
export default {
  data() {
    return {
      options: list[1].children
    };
  },
  methods: {
    click(item) {
      /* eslint-disable */
      if (parent) {
        parent.window.pushRouter(item.path);
      }
      /* eslint-disable */
    }
  }
};
</script>

<style lang="less" scoped>
.Amui-home {
  padding: 0 12px 12px 12px;
  .logo {
    height: 80px;
  }
  .Am-Card {
    margin-top: 14px;
  }
}
</style>