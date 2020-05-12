<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-12 15:41:09
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

### Upload 表单校验
---

#### 使用方式

``` javascript

import Vue 'vue'
import { Upload } 'vvmui'

Vue.component(Upload)

```


#### 基础用法
`quality`属性可设置图片压缩的比例
##### 代码示例
```html

<template>
  <Upload
    v-model="src"
    action="https://jsonplaceholder.typicode.com/posts/"
    :onSuccess="onSuccess"
    :quality="0.7"
  />
</template>

<script>
export default {
  data() {
    return {
      src: ""
    };
  },
  methods: {
    onSuccess(file) {
      this.src = URL.createObjectURL(file);
    }
  }
};
</script>

```


#### 接管文件上传
使用者需要自行上传文件时可通过`beforeUpload`属性传入自定义接管文件上传方法。
##### 代码示例
```html

<template>
  <Upload
    v-model="value"
    action="https://jsonplaceholder.typicode.com/posts/"
    :beforeUpload="beforeUpload"
  />
</template>

<script>
export default {
  data() {
    return {
      model: {
        value: ""
      }
    };
  },
  methods: {
    beforeUpload(file) {
      this.value = URL.createObjectURL(file);
    }
  }
};
</script>

```


#### 自定义占位图
##### 代码示例
```html

<template>
  <Upload
    v-model="file"
    action="https://jsonplaceholder.typicode.com/posts/"
    :quality="0.7"
    :beforeUpload="fileBeforeUpload"
  >
    <Icon icon="iconfile"/>
  </Upload>
</template>

<script>
export default {
  data() {
    return {
      file: ""
    };
  },
  methods: {
    fileBeforeUpload(file) {
      this.file = URL.createObjectURL(file);
    }
  }
};
</script>

```


#### 多文件上传
`type`默认`single`单文件上传，设置为`multiple`启用多文件上传。
##### 代码示例
```html

<template>
  <Upload
    v-model="array"
    action="https://jsonplaceholder.typicode.com/posts/"
    type="multiple"
    :beforeUpload="multipleBeforeUpload"
  />
</template>

<script>
export default {
  data() {
    return {
      array: []
    };
  },
  methods: {
    multipleBeforeUpload(file) {
      this.array.push(URL.createObjectURL(file));
    }
  }
};
</script>

```
#### 多文件上传，限制上传个数
多文件上传时可通过`maxNumber`属性控制最大上传个数。
##### 代码示例
```html

<template>
  <Upload
    v-model="list"
    action="https://jsonplaceholder.typicode.com/posts/"
    type="multiple"
    :beforeUpload="maxNumberBeforeUpload"
    :maxNumber="3"
  />
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    maxNumberBeforeUpload(file) {
      this.list.push(URL.createObjectURL(file));
    }
  }
};
</script>

```
#### 多文件展示控制
`showRemove`属性可关闭文件删除图标，通过设置`value-string`属性可以更灵活的展示多文件类型的列表。
##### 代码示例
```html

<template>
  <Upload
    v-model="files"
    type="multiple"
    disabled
    :showRemove="false"
    :maxNumber="4"
    :value-string="false"
  />
</template>

<script>
export default {
  data() {
    return {
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
  }
};
</script>

```

### API
##### Upload props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model  | 绑定的值     | String / Array       | 无 | 无
| icon  | 占位icon      | String       | 无 | 无 |
| value-string  | 多文件类型展示的时候可设置该属性      | Boolean   | 无 | true |
| size  | 图片超过指定大小不让上传     | Number       | 无 | 3072 |
| disabled |  禁用上传  | Boolean       | 无 | 无 |
| icon-size  | 占位icon大小    | Number       | 无 | 24 |
| name | input的原生属性    | String       | 无 | file |
| accept | 限制文件上传的类型    | Array       | 无 | 无 |
| acceptErrorMessage | 文件类型错误的提示内容    | String       | 无 | 文件类型错误 |
| compress | 是否开启图片压缩    | Boolean       | 无 | true |
| compress-size | 图片超过该大小进行压缩    | Number       | 无 | 512 |
| data | 上传附带的内容    | Object       | 无 | 无 |
| action | 上传地址    | String       | 无 | 无 |
| headers | 上传的请求头部    | Object       | 无 | 无 |
| img-width | 图片压缩时指定压缩的图片宽度，传false时会默认当前图片的宽度    | Number / Boolean       | 无 | 800 |
| quality | 图片压缩的质量    | Number      | 无 | 1 |
| onSuccessText | 上传成功的提示内容    | String     | 无 | 上传成功 |
| onErrorText | 上传成功的提示内容    | String     | 无 | 上传失败 |
| showRemove | 是否展示删除icon    | Boolean     | 无 | true |
| type | 上传方式    | String     | `single` `multiple` | single |
| maxNumber | 多文件上传时，最大上传的个数    | Number     | 无 | 无 |
| isImage | 展示的文件是否为图片    | Boolean     | 无 | true |
| beforeUpload | 上传文件之前调用的钩子，一旦传入该函数，内部上传将不会执行。    | Function，`(file) => {}`      | 无 | 无 |
| onSuccess | 上传成功调用的钩子    | Function，`(file, res) => {}`      | 无 | 无 |
| onError | 上传失败调用的钩子    | Function，`(file, res) => {}`      | 无 | 无 |
| onLoadend | 文件上传成功或者失败都会调用的钩子    | Function，`(file, res) => {}`      | 无 | 无 |
| onProgress | 文件上传进度调用的钩子    | Function，`(file, res) => {}`      | 无 | 无 |
| beforeRemove | 删除文件时会调用的钩子，一旦传入该函数，内部删除将不会执行。    | Function，`(file, value) => {}`      | 无 | 无 |

##### Upload Methods
| 方法名 | 说明 | 参数 |
|------|------------|------------|
| onProgressPercent  | 使用者自定义上传时，可通过该方法实现上传进度 |  Function:(percent) => {}  |

##### Upload solt
| 名称 | 说明 |
|------|------------|
| 无  | 占位内容 |

##### 更新日志
| 版本 |类型|内容|
|:-------------:|:-|:-|