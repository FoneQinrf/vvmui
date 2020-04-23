<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-22 16:14:42
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-22 16:36:30
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->
<template>
  <div>
    <section v-if="false" class="demo-button-row">
      <h3>测试限制文件类型</h3>
      <Upload action="https://jsonplaceholder.typicode.com/posts/" :accept="['png']" />
    </section>
    <section v-if="false" class="demo-button-row">
      <h3>测试接管删除数据</h3>
      <Upload
        v-model="remove"
        :beforeRemove="onRemove"
        action="https://jsonplaceholder.typicode.com/posts/"
      />
    </section>
    <section v-if="false" class="demo-button-row">
      <h3>测试接管多文件删除数据</h3>
      <Upload
        v-model="list"
        type="multiple"
        :beforeRemove="beforeRemove"
        action="https://jsonplaceholder.typicode.com/posts/"
      />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remove: "",
      list: []
    };
  },
  methods: {
    onRemove() {
      this.remove = "";
    },
    beforeRemove(value, list, index) {
      this.list.splice(index, 1);
    }
  }
};
</script>