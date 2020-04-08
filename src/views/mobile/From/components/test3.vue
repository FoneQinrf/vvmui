<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-26 11:20:44
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:08:26
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="form">
    <h3>自定义校验</h3>
    <From ref="from" status-icon :rules="rules" :model="model">
      <From-Item validate-loading label="用户名" prop="uasrName">
        <Input v-model="model.uasrName" />
      </From-Item>
      <From-Item label="密码" prop="pass">
        <Input type="password" v-model="model.pass" />
      </From-Item>
      <From-Item label="确认密码" prop="validatePass">
        <Input type="password" v-model="model.validatePass" />
      </From-Item>
    </From>
    <div class="bto" style="padding:15px">
      <Button @click="click">提 交</Button>
      <Button @click="resetFields">重 置</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const uasrName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入用户名"));
      }
      setTimeout(() => {
        callback();
      }, 1000);
    };
    const pass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入密码"));
      }
      callback();
    };
    const validatePass = (rule, value, callback) => {
      if (!this.model.pass) {
        this.$refs.from.validateField("pass", "blur");
        return;
      }
      if (!value) {
        return callback(new Error("请再次输入密码"));
      }
      if (this.model.pass !== value) {
        return callback(new Error("两次密码不一致"));
      }
      callback();
    };
    return {
      model: {
        uasrName: "",
        pass: "",
        validatePass: ""
      },
      rules: {
        uasrName: [{ validator: uasrName, trigger: "blur" }],
        pass: [{ validator: pass, trigger: "blur" }],
        validatePass: [{ validator: validatePass, trigger: "blur" }]
      }
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