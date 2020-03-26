<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-21 17:32:52
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-10-22 14:25:45
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <li
    @click="click"
    :class="[
        'g7-Cell',
        {
          'cell-active': to || url || arrow,
          'cell-block':model === 'block'
        }
      ]"
  >
    <Icon v-if="icon" :icon="icon" />
    <div class="g7-Cell-label g7-ellipsis">
      <slot name="label">{{label}}</slot>
    </div>
    <template v-if="model === 'block'">
      <div class="g7-Cell-botton">
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
import Icon from "../Icon";
import links from "../../mixins/links";
export default {
  name: "G-Cell",
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
    }
  },
  computed: {
    clasess() {
      return [
        "g7-Cell-value",
        {
          "g7-Cell-right": this.label
        }
      ];
    }
  },
  methods: {
    click() {
      this.$emit("on-click");
      this.handleLink();
    }
  }
};
</script>