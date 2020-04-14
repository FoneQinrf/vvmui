<!--
 * @Author: Fone丶峰
 * @Date: 2019-11-05 10:53:12
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-14 17:51:28
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <demoTop gray text="ActionSheet">
    <Cell-Group title="使用方式">
      <Cell label="请选择">
        <Action-Sheet :data="[{label:'选项一',value:1},{label:'选项二',value:2}]" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="v-model使用">
      <Cell label="请选择">
        <Action-Sheet v-model="value" :data="[{label:'男',value:1},{label:'女',value:2}]" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="禁用">
      <Cell label="请选择">
        <Action-Sheet disabled :value="1" :data="[{label:'男',value:1},{label:'女',value:2}]" />
      </Cell>
    </Cell-Group>
    <Cell-Group v-if="false" title="禁用">
      <Cell label="请选择">
        <Action-Sheet disabled :data="[{label:'男',value:1},{label:'女',value:2}]" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="禁用部分选项">
      <Cell label="请选择">
        <Action-Sheet :data="list" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="异步数据">
      <Cell label="请选择">
        <Action-Sheet @on-show="show" :data="data" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="事件">
      <Cell label="请选择">
        <Action-Sheet @on-confirm="confirm" :data="list" />
      </Cell>
    </Cell-Group>
  </demoTop>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      data: [],
      list: [
        { label: "选项一", value: 1 },
        { label: "选项二", value: 2, disabled: true },
        { label: "选项三", value: 2 }
      ]
    };
  },
  methods: {
    show() {
      setTimeout(() => {
        this.data = [
          { label: "男", value: 1 },
          { label: "女", value: 2 }
        ];
      }, 2000);
    },
    confirm(value) {
      this.$Toast.info(`选中value:${value}`);
    }
  }
};
</script>

<style scoped>
.Am-CellGroup >>> .Am-Input-context {
  text-align: right;
}
</style>