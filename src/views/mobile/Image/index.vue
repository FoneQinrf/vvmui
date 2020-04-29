<!--
 * @Author: Fone丶峰
 * @Date: 2019-11-05 10:53:12
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 17:47:33
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <demoTop gray text="Lazyload">
    <h3>基本用法</h3>
    <div class="Lazyload-wrp">
      <v-Image
        v-for="item in fit"
        :key="item"
        style="width: 48%;height: 80px;margin-top: 8px;"
        src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2075903360,405209795&fm=26&gp=0.jpg"
        :fit="item"
      />
    </div>
    <h3>懒加载</h3>
    <div class="Lazyload-wrp">
      <v-Image
        v-for="item in list"
        :key="item"
        style="width: 48%;height: 80px;margin-top: 8px;"
        :src="item"
        lazy
        :delay-time="2000"
      >
        <Icon slot="placeholder" class="vvm-loading" icon="iconloading1" />
      </v-Image>
    </div>
    <h3>图片加载失败</h3>
    <div class="Lazyload-wrp">
      <v-Image style="width: 48%;height: 80px">
        <span slot="error">图片加载失败</span>
      </v-Image>
    </div>
  </demoTop>
</template>

<script>
export default {
  data() {
    return {
      fit: ["fill", "contain", "cover", "none", "scale-down"],
      list: [
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2075903360,405209795&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1141016847,1401366425&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1290722415,3385672457&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1548119743,252552301&fm=26&gp=0.jpg"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
h3 {
  margin: 0;
  padding: 15px 0 15px 15px;
  color: #84849a;
  font-weight: normal;
  font-size: 14px;
}
.Lazyload-wrp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
}
.vvm-Image {
  background: #fff;
}
</style>