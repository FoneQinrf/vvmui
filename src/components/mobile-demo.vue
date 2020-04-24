<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-30 09:21:57
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 17:41:00
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="mobile-demo">
    <iframe class="iframe" frameborder="0" :src="path + '/mobile.html'" ref="iframe"></iframe>
  </div>
</template>
<script>
const array = [
  "main",
  "main-introduce",
  "main-quickstart",
  "main-updata",
  "main-style",
  "main-Icon"
];
export default {
  data() {
    return {
      name: "",
      state: false,
      path:
        process.env.NODE_ENV === "development"
          ? window.location.origin
          : "https://foneqinrf.github.io/vvmui"
    };
  },
  watch: {
    $route(val) {
      const { name } = val;
      this.init(name);
    },
    state(val) {
      if (val) {
        const { name } = this.$route;
        this.init(name);
      }
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
    window.initState = () => {
      this.state = true;
    };
    window.pushRouter = path => {
      this.$router.push(path);
    };
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
