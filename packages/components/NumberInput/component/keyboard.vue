<!--
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-14 13:56:48
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div @click.stop class="Am-Number-keyboard">
    <Layer :mask-show="false" direction="bottom" v-model="value">
      <div class="Am-Number-Input-layer">
        <div class="Am-Number-Input-keyboard">
          <div class="Am-Number-Input-keyboard-title">
            <div @click.stop="close">
              <Icon icon="iconxiangxia" />
            </div>
          </div>
          <div class="Am-Number-Input-key">
            <ul class="Am-Number-Input-key-number">
              <li
                class="Am-Number-Input-key-item"
                v-for="item in 9"
                @click.stop="keyup(item)"
                :key="item"
              >{{item}}</li>
              <template v-if="isDecimal">
                <li class="Am-Number-Input-key-item" @click.stop="keyup('.')">
                  <Icon icon="icondian" />
                </li>
              </template>
              <template v-else>
                <li class="Am-Number-Input-key-item"></li>
              </template>
              <li class="Am-Number-Input-key-item" @click.stop="keyup('0')">0</li>
              <li class="Am-Number-Input-key-item" @click.stop="remove">
                <Icon icon="iconshanchu" />
              </li>
            </ul>
            <div class="Am-Number-Input-key-right">
              <template v-if="negativeNumber">
                <label class="right-cut" @click.stop="keyup('-')">
                  <Icon icon="iconiconfontmove" />
                </label>
              </template>
              <template v-else>
                <label class="right-cut"></label>
              </template>
              <label @click="confirm" class="right-confirm">{{confirmText}}</label>
            </div>
          </div>
        </div>
      </div>
    </Layer>
  </div>
</template>

<script>
import Layer from "../../Layer";
import Icon from "../../Icon";
export default {
  name: "G-Number-keyboard",
  components: { Layer, Icon },
  methods: {
    keyup(key) {
      this.$emit("on-keyup", key);
    },
    confirm() {
      this.$emit("on-confirm");
    },
    remove() {
      this.$emit("on-remove");
    },
    close() {
      this.$emit("input", false);
    }
  },
  props: {
    confirmText: {},
    value: {},
    isDecimal: {},
    negativeNumber: {}
  }
};
</script>