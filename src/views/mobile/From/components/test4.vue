<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-26 15:59:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-21 16:45:55
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="form">
    <h3>可用于表单校验的组件</h3>
    <From ref="from" :model="model">
      <From-Item label="输入框" prop="uasrName" :rule="[{required:true,message:'请输入内容'}]">
        <Input v-model="model.uasrName" />
      </From-Item>
      <From-Item
        label="数字键盘"
        prop="age"
        :rule="[{required:true,message:'请输入内容',type:'number',trigger:'change'}]"
      >
        <Number-Input :negative-number="false" v-model="model.age" />
      </From-Item>
      <From-Item label="单选框" prop="sex" :rule="[{required:true,message:'请选择',trigger:'change'}]">
        <Radio-Group v-model="model.sex" inline>
          <Radio label="男" />
          <Radio label="女" />
        </Radio-Group>
      </From-Item>
      <From-Item
        label="多选框"
        prop="like"
        :rule="[{required:true,message:'请选择',trigger:'change',type:'array'}]"
      >
        <Checkbox-Group v-model="model.like">
          <Checkbox label="吃" />
          <Checkbox label="喝" />
          <Checkbox label="睡" />
        </Checkbox-Group>
      </From-Item>
      <From-Item
        label="级联选择"
        prop="address"
        :rule="[{required:true,message:'请选择',trigger:'change',type:'array'}]"
      >
        <Picker v-model="model.address" label="name" key-value="name" :options="options" />
      </From-Item>
      <From-Item
        label="上拉选择"
        prop="state"
        :rule="[{required:true,message:'请选择',trigger:'change',type:'number'}]"
      >
        <ActionSheet v-model="model.state" :data="[{label:'已婚',value:1},{label:'未婚',value:2}]" />
      </From-Item>
      <From-Item
        label="选择时间"
        prop="datetime"
        :rule="[{required:true,message:'请选择',trigger:'change'}]"
      >
        <DatetimePicker v-model="model.datetime" type="datetime" />
      </From-Item>
      <From-Item
        label="选择日期"
        prop="date"
        :rule="[{required:true,message:'请选择',trigger:'change',type:'array'}]"
      >
        <Calendar v-model="model.date" />
      </From-Item>
      <From-Item label="开关" prop="switch">
        <Am-Switch v-model="model.switch" />
      </From-Item>
      <From-Item
        :cell-inline="false"
        label="上传文件"
        prop="file"
        :rule="[{required:true,message:'请上传文件',trigger:'change'}]"
      >
        <Upload
          v-model="model.file"
          action="https://jsonplaceholder.typicode.com/posts/"
          :beforeUpload="multipleBeforeUpload"
        />
      </From-Item>
    </From>
    <div class="bto" style="padding:15px">
      <Button @click="click">提 交</Button>
      <Button @click="resetFields">重 置</Button>
    </div>
  </div>
</template>

<script>
import { modal } from "./date";
export default {
  data() {
    return {
      model: {
        uasrName: "",
        sex: "",
        like: [],
        address: [],
        age: "",
        state: "",
        datetime: "",
        date: [],
        switch: "",
        file: ""
      },
      options: modal()
    };
  },
  methods: {
    click() {
      this.$refs.from.validate(value => {
        if (value) {
          this.$Toast.success("校验通过");
        }
      });
    },
    resetFields() {
      //console.log(this.model);
      this.$refs.from.resetFields();
    },
    multipleBeforeUpload(file) {
      this.model.file = URL.createObjectURL(file);
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
.bto {
  display: flex;
  justify-content: space-around;
}
</style>
<style scoped>
.form >>> .Am-Upload-default-icon {
  border: 1px solid #999;
}
</style>