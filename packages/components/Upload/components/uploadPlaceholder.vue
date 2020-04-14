<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-08 09:48:03
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:04:47
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->


<template>
  <div class="Am-Upload-default-icon">
    <template v-if="!url">
      <slot>
        <Icon :size="iconSize" :icon="icon" />
      </slot>
    </template>
    <template v-else>
      <template v-if="isImage">
        <img class="Am-Upload-img" :src="url" />
      </template>
      <template v-else>
        <Icon :size="34" icon="iconicon-" />
      </template>
      <span @click.stop="onRemove" v-if="showRemove" class="Am-Upload-removeImg">
        <Icon :size="14" icon="iconcuowu" color="#fff" />
      </span>
    </template>
  </div>
</template>

<script>
import Icon from "../../Icon"; //自定义组件
export default {
  components: { Icon },
  props: {
    url: String,
    iconSize: Number,
    icon: String,
    isImage: Boolean,
    showRemove: Boolean,
    index: Number
  },
  methods: {
    onRemove() {
      this.$emit("on-remove", this.index);
    }
  }
};
</script>