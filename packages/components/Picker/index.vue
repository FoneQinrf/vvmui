<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-22 17:31:58
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-04 10:27:17
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div class="g7-Picker">
    <div
      :class="[
        'g7-Picker-context',
        'g7-ellipsis',
        {'placeholder':context===placeholder,'disabled':disabled}
      ]"
      @click="click"
    >{{context}}</div>
    <Layer v-if="!disabled" direction="bottom" isMask v-model="LayerVal">
      <template>
        <div class="g7-Picker-title">
          <span @click="onCancel" class="cancel-text">{{cancelText}}</span>
          <span @click="onConfirm" class="confirm-text g7-text-color-default">{{confirmText}}</span>
        </div>
        <div class="g7-Picker-body">
          <Picker
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
          <div v-show="options.length===0" class="g7-Picker-loading" :style="PickerHeight">loading</div>
        </div>
      </template>
    </Layer>
  </div>
</template>

<script>
import Layer from "../Layer";
import Picker from "./src/component.vue";
import mixins from "./src/mixins";
import { initIndex, initPlaceholder, initModel, typeOF } from "./utils";

export default {
  name: "G-Picker",
  mixins: [mixins],
  components: {
    Layer,
    Picker
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
      type: [Object, Array, String],
      default: function() {
        return [];
      }
    },
    keyValue: {
      type: String,
      default: "value"
    },
    model: {
      type: Array,
      default: function() {
        return [];
      }
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
      if (typeOF(this.value) === "Array") {
        this.$emit("on-change", this.index);
        return;
      }
      this.$emit("on-change", this.resetModel(), this.index);
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
      const fnc = {
        Array: () => {
          this.$emit("input", model);
          this.$emit("on-confirm", model, this.list);
        },
        Object: () => {
          this.model.forEach(element => {
            this.value[element] = model[element];
          });
          this.$emit("on-confirm", model, this.index);
        },
        String: () => {
          this.$emit("input", model);
          this.$emit("on-confirm", model, this.list);
        }
      };
      fnc[typeOF(this.value)]();
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
    },
    model() {
      this.initIndex();
      this.initPlaceholder();
    }
  }
};
</script>