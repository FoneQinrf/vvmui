<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-22 14:30:52
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

## From 表单校验
---

#### 使用方式

``` javascript

import Vue from 'vue'
import { From, FromItem } from 'am-ui'

Vue.component(From)
Vue.component(FromItem)

```


#### 基础用法
##### 代码示例
```html

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

```


#### 表单校验
`From`设置`status-icon`属性，表单在校验的时候会在右侧显示校验的状态。
##### 代码示例
```html

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

```


#### 自定义校验
`From-Item`组件上使用`validate-loading`属性时会在校验的时候开启loading状态。
##### 代码示例
```html

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

```


#### 可用于表单校验的组件

##### 代码示例
```html

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

```

### API
##### From props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| model  | 表单数据对象       | Object       | 无 | 无
| rules  | 表单验证规则      | Object       | 无 | 无 |
| status-icon  | 表单校验时右侧是否开启图标反馈      | Boolean   | 无 | 无 |
| success-icon  | status-icon开启时校验成功的图标      | String       | 无 | iconuncheck |
| error-icon |  status-icon开启时校验失败的图标  | String       | 无 | iconcuowu |
| label-width  | 表单域标签的宽度    | Number       | 无 | 70 |

##### Form Methods
| 方法名 | 说明 | 参数 |
|------|------------|------------|
| validate  | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入是否校验成功的参数， |  Function:(callback: (boolean) => {}) => {}  |
| validateField  | 对个别表单字段进行校验的方法，返回Promise，检验成功返回success、错误返回error |  Function:(prop:string,eventName:string) => {}  |
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 |  无  |
| clearValidate | 移除所有校验结果 |  无 |

##### FromItem props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| label  | 标签文本       | String       | 无 | 无
| prop  | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的      | String       | 传入 Form 组件的 model 中的字段 | 无 |
| rule  | 表单验证规则     | Array   | 无 | 无 |
| cellInline  | 左右默认行内模式，设置为false时上下分块      | Boolean       | 无 | true |
| label-width |  表单域标签的的宽度  | Number       | 无 | 无 |
| validate-loading  | 校验该项时是否loading    | Boolean       | 无 | 无 |

##### FromItem solt
| 名称 | 说明 |
|------|------------|
| 无  | Form Item 的内容 |
| label | 标签文本的内容 |