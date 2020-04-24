<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-08 09:48:03
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 09:56:41
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <demoTop gray text="Picker">
    <Cell-Group title="基本用法">
      <Cell label="选择时间">
        <template>
          <DatetimePicker />
        </template>
      </Cell>
    </Cell-Group>
    <Cell-Group title="datetime">
      <Cell label="选择时间">
        <template>
          <DatetimePicker type="datetime" />
        </template>
      </Cell>
    </Cell-Group>
    <Cell-Group title="time">
      <Cell label="选择时间">
        <template>
          <DatetimePicker type="time" />
        </template>
      </Cell>
    </Cell-Group>
    <Cell-Group title="绑定值">
      <Cell label="请选择">
        <template>
          <DatetimePicker v-model="value" />
        </template>
      </Cell>
    </Cell-Group>
    <Cell-Group title="禁用">
      <Cell label="请选择">
        <template>
          <DatetimePicker disabled v-model="value" />
        </template>
      </Cell>
    </Cell-Group>
    <Cell-Group v-if="false" title="测试异步数据">
      <Cell label="请选择">
        <template>
          <DatetimePicker :type="type" v-model="value1" />
        </template>
      </Cell>
    </Cell-Group>
    <Cell-Group title="事件">
      <Cell label="请选择">
        <template>
          <DatetimePicker @on-confirm="confirm" type="time" />
        </template>
      </Cell>
    </Cell-Group>
    <Cell-Group title="自定义时间格式化">
      <Cell label="请选择">
        <template>
          <DatetimePicker :formatter="formatter" />
        </template>
      </Cell>
    </Cell-Group>
  </demoTop>
</template>

<script>
export default {
  data() {
    return {
      value: "2020/4/2",
      value1: "1969/12/12 23:23:23",
      type: "date"
    };
  },
  methods: {
    confirm(val) {
      this.$Toast.info(val);
    },
    formatter(val) {
      return val.replace(/\//g, "-");
    }
  },
  mounted() {
    setTimeout(() => {
      this.type = "datetime";
      this.value1 = "1970/12/12 23:23:23";
    }, 2000);
  }
};
</script>

<style scoped>
.vvm-CellGroup >>> .vvm-Input-context {
  text-align: right;
}
</style>