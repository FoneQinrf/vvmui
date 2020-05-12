<!--
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-09 11:41:54
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div @click.stop class="vvm-Number-keyboard">
    <Layer :mask-show="false" direction="bottom" v-model="value">
      <div class="vvm-Number-Input-layer">
        <div class="vvm-Number-Input-keyboard">
          <div class="vvm-Number-Input-keyboard-title">
            <div @click.stop="close">
              <Icon icon="iconxiangxia" />
            </div>
          </div>
          <div class="vvm-Number-Input-key">
            <ul class="vvm-Number-Input-key-number">
              <li
                class="vvm-Number-Input-key-item"
                v-for="item in 9"
                @click.stop="keyup(item)"
                :key="item"
              >{{item}}</li>
              <template v-if="isDecimal">
                <li class="vvm-Number-Input-key-item" @click.stop="keyup('.')">
                  <Icon icon="icondian" />
                </li>
              </template>
              <template v-else>
                <li class="vvm-Number-Input-key-item"></li>
              </template>
              <li class="vvm-Number-Input-key-item" @click.stop="keyup('0')">0</li>
              <li class="vvm-Number-Input-key-item" @click.stop="remove">
                <Icon icon="iconshanchu" />
              </li>
            </ul>
            <div class="vvm-Number-Input-key-right">
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
import Layer from "@/components/Model";
import Icon from "@/components/Icon";
export default {
  name: "Number-keyboard",
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