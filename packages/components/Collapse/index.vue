<!--
 * @Author: Fone丶峰
 * @Date: 2020-05-06 10:54:31
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-06 16:44:08
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->
<template>
  <li class="vvm-Collapse">
    <div @click="click" class="vvm-Collapse-header">
      <div class="vvm-Collapse-header--title">
        <slot name="title">{{title}}</slot>
      </div>
      <div :class="['vvm-Collapse-header--icon', {open: isActive}]">
        <Icon icon="iconlist-rigthl" />
      </div>
    </div>
    <CollapseTransition>
      <div v-show="isActive" class="vvm-Collapse-body">
        <div class="vvm-Collapse-body-content">
          <slot></slot>
        </div>
      </div>
    </CollapseTransition>
  </li>
</template>

<script>
import Icon from "@/components/Icon";
import { findComponentUpward } from "@/utils";
import CollapseTransition from "@/utils/CollapseTransition";
export default {
  name: "Collapse",
  props: {
    title: String,
    name: {
      type: [String, Number]
    }
  },
  data() {
    return {
      parent: ""
    };
  },
  components: { Icon, CollapseTransition },
  mounted() {
    const parent = findComponentUpward(this, "Collapse-Group");
    if (parent) {
      this.parent = parent;
    }
  },
  methods: {
    click() {
      this.parent.click(this.name);
    }
  },
  computed: {
    isActive() {
      if (this.parent) {
        return this.accordion
          ? this.name === this.parent.currentValue
          : this.parent.currentValue.includes(this.name);
      }
      return false;
    }
  }
};
</script>