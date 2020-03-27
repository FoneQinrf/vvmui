<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-25 16:10:01
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-27 13:21:43
 * @Description: 
 * @Email: qinrifeng@g7.com.cn
 -->
<template>
  <div class="form">
    <h3>表单校验</h3>
    <From ref="from" status-icon :model="model">
      <From-Item label="姓名" prop="uasrName" :rule="[{required:true,message:'请输入姓名'}]">
        <Input v-model="model.uasrName" />
      </From-Item>
      <From-Item label="年龄" prop="age" :rule="[{required:true,message:'请输入年龄'}]">
        <Input v-model="model.age" />
      </From-Item>
      <From-Item
        :cell-inline="false"
        label="证件信息"
        prop="file"
        :rule="[{required:true,message:'请上传证件信息',type:'array',trigger:'change'}]"
      >
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
      <Button @click="click" long>提 交</Button>
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
    },
    click() {
      this.$refs.from.validate(value => {
        if (value) {
          this.$Toast.success("校验通过");
        }
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