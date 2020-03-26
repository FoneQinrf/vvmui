<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-17 14:43:03
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-23 14:42:12
 * @Description: 
 * @Email: qinrifeng@g7.com.cn
 -->
<template>
  <div class="g7-Upload-default-icon">
    <template v-if="!url">
      <slot>
        <Icon :size="iconSize" :icon="icon" />
      </slot>
    </template>
    <template v-else>
      <template v-if="isImage">
        <img class="g7-Upload-img" :src="url" />
      </template>
      <template v-else>
        <Icon :size="34" icon="iconicon-" />
      </template>
      <span @click.stop="onRemove" v-if="showRemove" class="g7-Upload-removeImg">
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