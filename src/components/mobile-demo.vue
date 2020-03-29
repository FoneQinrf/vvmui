<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-05 11:32:26
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-29 21:05:13
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div class="mobile-demo">
    <iframe
      class="iframe"
      frameborder="0"
      :src="path + '/mobile.html'"
      ref="iframe"
    ></iframe>
  </div>
</template>
<script>
const array = ["main", "main-introduce", "main-quickstart", "main-updata"];
export default {
  data() {
    return {
      name: "",
      path:
        process.env.NODE_ENV === "development"
          ? window.location.origin
          : "https://foneqinrf.github.io/am-ui/"
    };
  },
  watch: {
    $route(val) {
      const { name } = val;
      this.init(name);
    }
  },
  methods: {
    init(name) {
      if (array.includes(name)) {
        this.name = "main";
      } else {
        this.name = name.replace(/main-/g, "");
      }
      this.$refs.iframe.contentWindow.routerFnc(this.name);
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        const { name } = this.$route;
        this.init(name);
      }, 1000);
    });
  }
};
</script>
<style lang="less" scoped>
.mobile-demo {
  width: 320px;
  height: 568px;
  border: 1px solid #e0e0eb;
  box-shadow: 0 0 12px #e0e0eb;
  position: fixed;
  top: 80px;
  right: 40px;
  .iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
