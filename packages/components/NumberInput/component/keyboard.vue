<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-12-18 11:52:04
 * @LastEditors  : Fone丶峰
 * @LastEditTime : 2019-12-18 13:37:03
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div @click.stop class="G-Number-keyboard">
    <Layer :mask-show="false" direction="bottom" v-model="value">
      <div class="g7-Number-Input-layer">
        <div class="g7-Number-Input-keyboard">
          <div class="g7-Number-Input-keyboard-title">
            <div @click.stop="close">
              <Icon icon="iconxiangxia" />
            </div>
          </div>
          <div class="g7-Number-Input-key">
            <ul class="g7-Number-Input-key-number">
              <li
                class="g7-Number-Input-key-item"
                v-for="item in 9"
                @click.stop="keyup(item)"
                :key="item"
              >{{item}}</li>
              <template v-if="isDecimal">
                <li class="g7-Number-Input-key-item" @click.stop="keyup('.')">
                  <Icon icon="icondian" />
                </li>
              </template>
              <template v-else>
                <li class="g7-Number-Input-key-item"></li>
              </template>
              <li class="g7-Number-Input-key-item" @click.stop="keyup('0')">0</li>
              <li class="g7-Number-Input-key-item" @click.stop="remove">
                <Icon icon="iconshanchu" />
              </li>
            </ul>
            <div class="g7-Number-Input-key-right">
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
      this.$emit("on-close", false);
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