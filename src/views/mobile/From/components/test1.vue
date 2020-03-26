<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-25 14:36:47
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-25 15:54:15
 * @Description: 
 * @Email: qinrifeng@g7.com.cn
 -->
<template>
  <div class="form">
    <h3>基本用法</h3>
    <G-From :model="model">
      <G-From-Item label="姓名" prop="uasrName">
        <G-Input v-model="model.uasrName" />
      </G-From-Item>
      <G-From-Item label="年龄" prop="age">
        <G-Input v-model="model.age" />
      </G-From-Item>
      <G-From-Item :cellInline="false" label="证件信息" prop="file">
        <G-Upload
          v-model="model.file"
          action="https://jsonplaceholder.typicode.com/posts/"
          type="multiple"
          :beforeUpload="multipleBeforeUpload"
          :maxNumber="2"
        />
      </G-From-Item>
    </G-From>
    <div style="padding:15px">
      <G-Button long>提 交</G-Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        uasrName: "",
        age: "",
        file: []
      }
    };
  },
  methods: {
    multipleBeforeUpload(file) {
      return new Promise(() => {
        this.model.file.push(URL.createObjectURL(file));
      });
    }
  }
};
</script>

<style lang="less" scoped>
h3 {
  margin: 0;
  padding: 15px 0 15px 15px;
  color: #84849a;
  font-weight: normal;
  font-size: 14px;
}
</style>
<style scoped>
.form >>> .g7-Upload-default-icon {
  border: 1px solid #999;
}
</style>