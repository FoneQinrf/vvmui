<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-14 17:29:51
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="Am-Picker">
    <div
      :class="[
        'Am-Picker-context'
      ]"
      @click="click"
    >
      <Input readonly :disabled="disabled" :placeholder="placeholder" v-model="context" />
    </div>
    <Layer v-if="!disabled" direction="bottom" isMask v-model="LayerVal">
      <template>
        <div class="Am-Picker-title">
          <span @click="onCancel" class="cancel-text">{{cancelText}}</span>
          <span @click="onConfirm" class="confirm-text Am-text-color-default">{{confirmText}}</span>
        </div>
        <div class="Am-Picker-body">
          <Am-Picker
            v-for="(item,$index) in list"
            :options="item"
            :height="height"
            :index="index[$index] ? index[$index] : 0"
            :label="label"
            :key="$index"
            :thisIndex="$index+1"
            @on-change="change"
            :ref="$index"
          />
          <transition name="fade">
            <div v-if="options.length===0" class="Am-Picker-loading" :style="PickerHeight">
              <Icon class="Am-loading" icon="iconloading1" :size="30" />
            </div>
          </transition>
        </div>
      </template>
    </Layer>
  </div>
</template>

<script>
import Layer from "../Layer";
import AmPicker from "./src/component.vue";
import mixins from "./src/mixins";
import { initIndex, initPlaceholder, initModel } from "./utils";
import emitter from "../../utils/emitter";
import Icon from "../Icon";
import Input from "../Input";

export default {
  name: "Picker",
  mixins: [mixins, emitter],
  components: {
    Layer,
    AmPicker,
    Icon,
    Input
  },
  data() {
    return {
      LayerVal: false,
      count: 0,
      index: [],
      context: ""
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    children: {
      type: String,
      default: "children"
    },
    value: {
      type: Array,
      default: function() {
        return [];
      }
    },
    keyValue: {
      type: String,
      default: "value"
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    change(options) {
      const array = [];
      for (const key in this.$refs) {
        if (Object.prototype.hasOwnProperty.call(this.$refs, key)) {
          if (key > options[0] - 1) {
            this.$refs[key][0].curreIndex = 0;
          }
          array.push(this.$refs[key][0].curreIndex);
        }
      }
      this.index = array;
      this.$emit("on-change", this.index);
    },
    resetModel() {
      return initModel(this);
    },
    click() {
      if (this.disabled) {
        return;
      }
      this.LayerVal = true;
      this.$emit("on-show");
    },
    onCancel() {
      this.LayerVal = false;
      this.$emit("on-cancel");
    },
    onConfirm() {
      const model = this.resetModel();
      this.$emit("input", model);
      this.$emit("on-confirm", model, this.list);
      this.dispatch("From-Item", "change", model);
      this.LayerVal = false;
    },
    initIndex() {
      this.index = initIndex(this);
    },
    initPlaceholder() {
      this.context = initPlaceholder(this);
    }
  },
  mounted() {
    this.initIndex();
    this.initPlaceholder();
  },
  computed: {
    list() {
      const array = [];
      if (this.options.length) {
        const init = (option, i) => {
          if (i < this.index.length && option) {
            array.push(option);
            init(option[this.index[i]][this.children], i + 1);
          }
        };
        init(this.options, 0);
        return array;
      }
      return array;
    }
  },
  watch: {
    value: {
      handler() {
        this.initIndex();
        this.initPlaceholder();
      },
      deep: true
    },
    options() {
      this.initIndex();
    }
  }
};
</script>