<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-08 11:17:40
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 11:51:26
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->
<template>
  <div class="vvm-Action-Sheet">
    <div @click="click" class="vvm-Action-Sheet-placeholder">
      <Input
        readonly
        :disabled="disabled"
        :placeholder="placeholder"
        v-model="placeholderText"
        :right-icon="rightArrow ? 'iconlist-rigthl' : ''"
      />
    </div>
    <Layer @on-mask="mask" :isMask="true" direction="bottom" v-model="show">
      <div class="vvm-Action-Sheet-Model">
        <div v-if="data.length === 0" class="vvm-Action-Sheet-loading">
          <Icon icon="iconloading1" :size="24" class="vvm-loading" />
        </div>
        <div v-else class="vvm-Action-Sheet-Model-list">
          <button
            v-for="(item,$index) in data"
            @click="clickItem(item)"
            :key="$index"
            :class="[item.disabled ? 'vvm-Action-Sheet-item disabled' : 'vvm-Action-Sheet-item']"
          >{{item[label]}}</button>
        </div>
        <button @click="close" class="vvm-Action-Sheet-close">{{closeText}}</button>
      </div>
    </Layer>
  </div>
</template>

<script>
import dispatch from "@/components/Emitter";
import Layer from "@/components/Modal";
import Icon from "@/components/Icon";
import Input from "@/components/Input";

export default {
  name: "ActionSheet",
  components: { Layer, Icon, Input },
  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    disabled: {
      type: Boolean
    },
    closeText: {
      type: String,
      default: "取消"
    },
    label: {
      type: String,
      default: "label"
    },
    returnKey: {
      type: String,
      default: "value"
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: [Number, String, Boolean],
      default: undefined
    },
    rightArrow: Boolean
  },
  data() {
    return {
      currentValue: this.value,
      show: false
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    }
  },
  methods: {
    clickItem(item) {
      if (item.disabled) {
        return;
      }
      this.show = false;
      this.currentValue = item[this.returnKey];
      this.$emit("input", this.currentValue);
      this.$emit("on-confirm", this.currentValue, item);
      dispatch("From-Item", "change", this.currentValue, this);
    },
    close() {
      this.show = false;
      this.$emit("on-close");
    },
    mask() {
      this.show = false;
      this.$emit("on-mask");
    },
    click() {
      if (this.disabled) {
        return;
      }
      this.$emit("on-show");
      this.show = true;
    }
  },
  computed: {
    placeholderText() {
      if (
        typeof this.currentValue !== "undefined" &&
        this.currentValue !== "" &&
        this.currentValue !== null
      ) {
        let str = "";
        this.data.map(item => {
          if (item[this.returnKey] === this.currentValue) {
            str = item[this.label];
          }
        });
        return str;
      }
      return "";
    }
  }
};
</script>