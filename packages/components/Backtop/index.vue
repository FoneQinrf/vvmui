<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-08 09:48:03
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 11:51:37
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->


<template>
  <transition name="fade">
    <div
      v-show="show"
      @click.stop="click"
      class="vvm-Backtop"
      :style="{right:`${right}px`,bottom:`${bottom}px`}"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { scrollToTop } from "@/utils";
export default {
  name: "Backtop",
  props: {
    right: {            //元素距离右边的距离
      type: Number,
      default: 10
    },
    bottom: {           //元素距底部距离
      type: Number,
      default: 10
    },
    target: {           //触发滚动的对象
      type: String
    },
    visibilityHeight: {   //滚动高度达到此值才显示
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      element: document.body,   //默认body节点
      show: false
    };
  },
  watch: {
    target() {
      //target变化，销毁之前监听的事件，并且重新初始化
      this.element.removeEventListener("scroll", this.scroll);
      this.init();
    }
  },
  methods: {
    scroll(e) {
      this.show = e.target.scrollTop > this.visibilityHeight;
    },
    init() {
      //初始化DOM节点，并且监听scroll事件
      if (this.target) {
        this.element = document.querySelector(this.target);
        if (!this.element) {
          throw new Error(`未找到${this.target}节点`);
        }
      }
      this.element.setAttribute("style", "scroll-behavior: smooth");
      this.element.addEventListener("scroll", this.scroll);
    },
    /**
     * 
     */
    click() {
      scrollToTop(0, this.element);
      this.$emit("on-click");
    }
  },
  mounted() {
    this.init();
  },
  destroyed() {
    //组件销毁，销毁掉监听的事件
    this.element.removeEventListener("scroll", this.scroll);
  }
};
</script>