<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-25 14:36:47
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:08:14
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="form">
    <h3>基本用法</h3>
    <From :model="model">
      <From-Item label="姓名" prop="uasrName">
        <Input v-model="model.uasrName" />
      </From-Item>
      <From-Item label="年龄" prop="age">
        <Input v-model="model.age" />
      </From-Item>
      <From-Item :cellInline="false" label="证件信息" prop="file">
        <Upload
          v-model="model.file"
          action="https://jsonplaceholder.typicode.com/posts/"
          type="multiple"
          :beforeUpload="multipleBeforeUpload"
          :maxNumber="2"
        />
      </From-Item>
    </From>
    <div style="padding:15px">
      <Button long>提 交</Button>
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
.form >>> .Am-Upload-default-icon {
  border: 1px solid #999;
}
</style>