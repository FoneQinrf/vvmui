<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-08 09:48:03
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-23 11:45:00
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <demoTop gray text="Calendar">
    <Cell-Group title="使用方式">
      <Cell label="请选择日期">
        <Calendar />
      </Cell>
    </Cell-Group>
    <Cell-Group title="选择单个日期">
      <Cell label="请选择日期">
        <Calendar type="single" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="不禁用过去的日期">
      <Cell label="请选择日期">
        <Calendar :oldDateDisabled="false" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="v-model绑定时间">
      <Cell label="请选择日期">
        <Calendar v-model="value" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="自定义禁用日期">
      <Cell label="请选择日期">
        <Calendar :oldDateDisabled="false" :disabled-list="disabledList" />
      </Cell>
    </Cell-Group>
    <Cell-Group v-if="false" title="调试">
      <Cell label="请选择日期">
        <Calendar :disabled-list="['2020/3/6','2020/3/8']" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="自定义日期内容，在每个月的这一天日期上加个红点">
      <Cell label="请选择日期">
        <Calendar>
          <template slot="dateItem" slot-scope="{node}">
            <template v-if="node.day === date">
              <span>{{node.day}}</span>
              <i class="red"></i>
            </template>
          </template>
        </Calendar>
      </Cell>
    </Cell-Group>
    <Cell-Group title="禁用">
      <Cell label="请选择日期">
        <Calendar disabled />
      </Cell>
    </Cell-Group>
    <Cell-Group v-if="false" title="开启箭头">
      <Cell label="请选择日期">
        <Calendar rightArrow />
      </Cell>
    </Cell-Group>
  </demoTop>
</template>

<script>
export default {
  data() {
    return {
      value: ["2020/5/3", "2020/5/6"],
      disabledList: [],
      date: new Date().getDate()
    };
  },
  mounted() {
    const date = new Date();
    this.disabledList = [
      `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
      `${date.getFullYear()}/${date.getMonth() + 2}/${date.getDate()}`
    ];
  }
};
</script>

<style lang="less" scoped>
.red {
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: red;
  position: absolute;
  top: 5px;
  right: 10px;
  z-index: 100000000000000;
}
</style>
<style scoped>
.Am-CellGroup >>> .Am-Input-context {
  text-align: right;
}
</style>