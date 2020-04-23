<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-23 11:17:17
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <demoTop gray text="Upload">
    <div class="demo-item-flex">
      <section class="demo-button-row">
        <h3>基本用法</h3>
        <Upload
          v-model="src"
          action="https://jsonplaceholder.typicode.com/posts/"
          :onSuccess="onSuccess"
          :quality="0.7"
        />
      </section>
      <section class="demo-button-row">
        <h3>接管文件上传</h3>
        <Upload
          v-model="value"
          action="https://jsonplaceholder.typicode.com/posts/"
          :beforeUpload="beforeUpload"
        />
      </section>
    </div>
    <section class="demo-button-row">
      <h3>自定义上传文件占位图</h3>
      <Upload
        v-model="file"
        action="https://jsonplaceholder.typicode.com/posts/"
        :quality="0.7"
        :beforeUpload="fileBeforeUpload"
      >
        <Icon icon="iconupload"/>
      </Upload>
    </section>
    <section class="demo-button-row">
      <h3>多文件上传</h3>
      <Upload
        v-model="array"
        action="https://jsonplaceholder.typicode.com/posts/"
        type="multiple"
        :beforeUpload="multipleBeforeUpload"
      />
    </section>
    <section class="demo-button-row">
      <h3>控制多文件，最多上传3张</h3>
      <Upload
        v-model="list"
        action="https://jsonplaceholder.typicode.com/posts/"
        type="multiple"
        :beforeUpload="maxNumberBeforeUpload"
        :maxNumber="3"
      />
    </section>
    <section class="demo-button-row">
      <h3>多文件展示控制</h3>
      <Upload
        v-model="files"
        type="multiple"
        disabled
        :showRemove="false"
        :maxNumber="4"
        :value-string="false"
      />
    </section>
    <Test />
  </demoTop>
</template>

<script>
import Test from "./components/test.vue";
export default {
  components: { Test },
  data() {
    return {
      src: "",
      value: "",
      array: [],
      list: [],
      file: "",
      files: [
        {
          value:
            "https://user-gold-cdn.xitu.io/2020/3/4/170a44b4cbae7897?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1",
          isImage: true
        },
        {
          value:
            "https://user-gold-cdn.xitu.io/2020/3/4/170a3678f7d5904c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",
          isImage: true
        },
        {
          value:
            "https://user-gold-cdn.xitu.io/2020/3/4/170a3678f7d5904c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",
          isImage: false
        }
      ]
    };
  },
  methods: {
    onSuccess(file) {
      this.src = URL.createObjectURL(file);
    },
    beforeUpload(file) {
      return new Promise(() => {
        this.value = URL.createObjectURL(file);
      });
    },
    multipleBeforeUpload(file) {
      return new Promise(() => {
        this.array.push(URL.createObjectURL(file));
      });
    },
    maxNumberBeforeUpload(file) {
      return new Promise(() => {
        this.list.push(URL.createObjectURL(file));
      });
    },
    fileBeforeUpload(file) {
      return new Promise(() => {
        this.file = URL.createObjectURL(file);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.demo-item-flex {
  display: flex;
  justify-content: space-around;
}
.demo-button-row {
  padding: 0 15px;
  h3 {
    margin: 0;
    padding: 15px 0;
    color: #84849a;
    font-weight: normal;
    font-size: 14px;
  }
  .cell {
    display: flex;
    justify-content: space-between;
  }
}
</style>