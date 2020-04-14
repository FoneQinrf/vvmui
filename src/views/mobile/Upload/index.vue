<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:10:52
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
        <i class="Am-iconfont iconupload"></i>
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
  </demoTop>
</template>

<script>
export default {
  data() {
    return {
      src: "",
      value: "",
      array: [],
      list: [],
      file: ""
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