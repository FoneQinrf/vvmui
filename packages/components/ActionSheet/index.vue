<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-08 11:17:40
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-09 15:23:10
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->
<template>
  <div class="Am-Action-Sheet">
    <div
      @click="click"
      :class="['Am-Action-Sheet-placeholder',{placeholder:!placeholderText.flag},{disabled:disabled}]"
    >{{placeholderText.placeholder}}</div>
    <Layer @on-mask="mask" :isMask="true" direction="bottom" v-model="show">
      <div class="Am-Action-Sheet-Model">
        <div v-if="data.length === 0" class="Am-Action-Sheet-loading">
          <Icon icon="iconloading1" :size="24" class="Am-loading" />
        </div>
        <div v-else class="Am-Action-Sheet-Model-list">
          <button
            v-for="(item,$index) in data"
            @click="clickItem(item)"
            :key="$index"
            :class="[item.disabled ? 'Am-Action-Sheet-item disabled' : 'Am-Action-Sheet-item']"
          >{{item[label]}}</button>
        </div>
        <button @click="close" class="Am-Action-Sheet-close">{{closeText}}</button>
      </div>
    </Layer>
  </div>
</template>

<script>
import emitter from "../../utils/emitter";
import Layer from "../Layer";
import Icon from "../Icon";

export default {
  name: "Action-Sheet",
  mixins: [emitter],
  components: { Layer, Icon },
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
    }
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
      this.dispatch("From-Item", "change", this.currentValue);
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
        return { placeholder: str, flag: true };
      }
      return { placeholder: this.placeholder, flag: false };
    }
  }
};
</script>