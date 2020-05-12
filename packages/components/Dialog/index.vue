<!--
 * @Author: Fone丶峰
 * @Date: 2020-05-08 15:21:32
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-12 17:10:55
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->
<template>
  <Modal
    @on-mask="cancel"
    @input="cancel"
    :isClickMask="isMask"
    :lockScroll="lockScroll"
    direction="center"
    v-model="show"
  >
    <div class="vvm-Dialog">
      <div v-if="showTitle" class="vvm-Dialog-title">{{titleText}}</div>
      <div class="vvm-Dialog-context">
        <slot>{{context}}</slot>
      </div>
      <div v-if="showCancelButton || showConfirmButton" class="vvm-Dialog-button vvm-hairline-top">
        <slot name="button">
          <div v-if="showCancelButton" class="vvm-Dialog-button-wrp cancel">
            <Button :disabled="loading" @click="cancel" :long="true">{{cancelButtonText}}</Button>
          </div>
          <div v-if="showConfirmButton" class="vvm-Dialog-button-wrp confirm vvm-hairline-left">
            <Button
              :loadingText="confirmButtonText"
              :loading="loading"
              @click="confirm"
              :long="true"
            >{{confirmButtonText}}</Button>
          </div>
        </slot>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Model";
import Button from "@/components/Button";
export default {
  name: "Dialog",
  components: {
    Modal,
    Button
  },
  data() {
    return {
      show: this.value,
      loading: false
    };
  },
  props: {
    value: Boolean,
    showTitle: {
      type: Boolean,
      default: true
    },
    titleText: {
      type: String,
      default: "消息"
    },
    context: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    cancelButtonText: {
      type: String,
      default: "取消"
    },
    confirmButtonText: {
      type: String,
      default: "确认"
    },
    isClickMask: Boolean,
    onConfirm: Function,
    lockScroll: Boolean
  },
  watch: {
    value(val) {
      this.show = val;
      if (!val) {
        this.loading = false;
      }
    }
  },
  methods: {
    cancel() {
      if (!this.loading) {
        this.show = false;
        this.loading = false;
        this.$emit("input", this.show);
        this.$emit("on-cancel");
      }
    },
    confirm() {
      if (this.onConfirm) {
        this.loading = true;
        this.onConfirm(() => {
          this.loading = false;
          this.show = false;
          this.$emit("input", this.show);
        });
        return;
      }
      this.show = false;
      this.$emit("input", this.show);
    }
  },
  computed: {
    isMask() {
      return this.loading ? false : this.isClickMask;
    }
  }
};
</script>