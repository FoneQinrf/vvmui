<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-05 09:35:58
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-04 21:21:03
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <demoTop gray text="Calendar">
    <Cell-Group title="使用方式">
      <Cell label="请选择日期">
        <G-Calendar />
      </Cell>
    </Cell-Group>
    <Cell-Group title="不禁用过去的日期">
      <Cell label="请选择日期">
        <G-Calendar :oldDateDisabled="false" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="v-model绑定时间">
      <Cell label="请选择日期">
        <G-Calendar v-model="value" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="自定义禁用日期，禁用日期为当前日期">
      <Cell label="请选择日期">
        <G-Calendar :oldDateDisabled="false" :disabledList="disabledList" />
      </Cell>
    </Cell-Group>
    <Cell-Group v-if="false" title="调试">
      <Cell label="请选择日期">
        <G-Calendar :disabledList="['2020-3-6','2020-3-8']" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="自定义日期内容，在每个月的这一天日期上加个红点">
      <Cell label="请选择日期">
        <G-Calendar v-if="true">
          <template slot="dateItem" slot-scope="{node}">
            <template v-if="node.day === date">
              <span>{{node.day}}</span>
              <i class="red"></i>
            </template>
          </template>
        </G-Calendar>
      </Cell>
    </Cell-Group>
    <Cell-Group title="禁用">
      <Cell label="请选择日期">
        <G-Calendar disabled />
      </Cell>
    </Cell-Group>
  </demoTop>
</template>

<script>
export default {
  data() {
    return {
      value: ["2020-4-3", "2020-4-6"],
      disabledList: [],
      date: new Date().getDate()
    };
  },
  mounted() {
    const date = new Date();
    this.disabledList = [
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
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