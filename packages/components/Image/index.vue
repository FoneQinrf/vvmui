<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-28 14:54:26
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 17:37:24
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->
<template>
  <div class="vvm-Image">
    <transition name="fade" mode="out-in">
      <div class="vvm-Image-placeholder" v-if="lazy && this.status === 'loading'">
        <slot name="placeholder" />
      </div>
      <div class="vvm-Image-error" v-if="this.status === 'load-error'">
        <slot name="error" />
      </div>
      <img
        v-if="this.status === 'load-success'"
        class="vvm-Image-inner"
        :src="src"
        :alt="alt"
        :style="style"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: "v-Image",
  props: {
    src: String,
    fit: {
      type: String,
      validator(val) {
        return ["fill", "contain", "cover", "none", "scale-down"].includes(val);
      }
    },
    alt: String,
    lazy: {
      type: Boolean
    },
    delayTime: Number
  },
  computed: {
    style() {
      if (this.fit) {
        return {
          objectFit: this.fit
        };
      }
      return {};
    }
  },
  data() {
    return {
      status: ""
    };
  },
  watch: {
    src() {
      this.lazyLoad();
    }
  },
  methods: {
    lazyLoad() {
      this.status = this.lazy ? "loading" : "load-success";
      const virtualImage = new Image();
      virtualImage.onload = e => {
        if (this.delayTime) {
          setTimeout(() => {
            this.onload(e);
          }, this.delayTime);
          return;
        }
        this.onload(e);
      };

      virtualImage.onerror = e => {
        this.onerror(e);
      };
      virtualImage.src = this.src;
    },
    onload(e) {
      this.status = "load-success";
      this.$emit("on-load", e);
    },
    onerror(e) {
      this.status = "load-error";
      this.$emit("on-error", e);
    }
  },
  mounted() {
    this.lazyLoad();
  }
};
</script>