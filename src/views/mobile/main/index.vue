<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 18:01:27
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="Amui-home">
    <div class="logo">
      <img src="@/assets/logo.png" />
      <p>轻量、易上手的Vue移动端组件库</p>
    </div>
    <Card v-for="(item,$index) in options" :key="$index" shadow :title-text="item.name">
      <div class="body-wrp">
        <Cell-Group>
          <Cell
            v-for="opt in item.children"
            :key="opt.name"
            :label="opt.name"
            :reture-value="opt"
            @on-click="click"
            v-if="opt.path !== '/main/Icon'"
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
      if (parent && parent.window && parent.window.initState) {
        parent.window.pushRouter(item.path);
      } else {
        const name = item.path.replace("main", "mobile");
        this.$router.push(name);
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
    height: 100px;
    padding-top: 20px;
    text-align: center;
    img {
      height: 60px;
    }
  }
  .vvm-Card {
    margin-top: 14px;
  }
}
</style>