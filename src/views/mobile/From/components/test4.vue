<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-26 15:59:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:08:33
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="form">
    <h3>可用于表单校验的组件</h3>
    <From ref="from" :model="model">
      <From-Item label="输入框" prop="uasrName">
        <Input v-model="model.uasrName" />
      </From-Item>
      <From-Item label="数字键盘" prop="age">
        <Number-Input :negative-number="false" v-model="model.age" />
      </From-Item>
      <From-Item label="单选框" prop="sex">
        <Radio-Group v-model="model.sex" inline>
          <Radio label="男" />
          <Radio label="女" />
        </Radio-Group>
      </From-Item>
      <From-Item label="多选框" prop="like">
        <Checkbox-Group v-model="model.like">
          <Checkbox label="吃" />
          <Checkbox label="喝" />
          <Checkbox label="睡" />
        </Checkbox-Group>
      </From-Item>
      <From-Item label="级联选择" prop="address">
        <Picker v-model="model.address" label="name" key-value="id" :options="options" />
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
        age: ""
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
      this.$refs.from.resetFields();
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
.form >>> .mm-Upload-default-icon {
  border: 1px solid #999;
}
</style>