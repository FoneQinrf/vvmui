<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 14:53:18
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 11:52:40
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <li
    @click="click"
    :class="[
        'vvm-Cell',
        {
          'cell-active': to || url || arrow,
          'cell-block':model === 'block'
        }
      ]"
  >
    <div class="vvm-Cell-label vvm-ellipsis">
      <Icon style="margin-right: 3px;" v-if="icon" :icon="icon" />
      <slot name="label">{{label}}</slot>
    </div>
    <template v-if="model === 'block'">
      <div class="vvm-Cell-botton">
        <slot>{{context}}</slot>
      </div>
    </template>
    <template v-else>
      <div v-if="!arrow" :class="clasess">
        <slot>{{context}}</slot>
        <Icon v-if="to || url" icon="iconlist-rigthl" />
      </div>
    </template>
  </li>
</template>
<script>
import Icon from "@/components/Icon";
import links from "@/mixins/links";
export default {
  name: "Cell",
  components: { Icon },
  mixins: [links],
  props: {
    label: {
      type: String
    },
    context: {
      type: String
    },
    icon: {
      type: String
    },
    arrow: {
      type: Boolean
    },
    model: {
      type: String,
      default: "default",
      validator: function(value) {
        return ["default", "block"].includes(value);
      }
    },
    retureValue: {}
  },
  computed: {
    clasess() {
      return [
        "vvm-Cell-value",
        {
          "vvm-Cell-right": this.label
        }
      ];
    }
  },
  methods: {
    click() {
      this.handleLink();
      this.$emit("on-click", this.retureValue);
    }
  }
};
</script>