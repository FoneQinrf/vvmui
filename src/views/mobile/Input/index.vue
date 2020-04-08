<!--
 * @Author: Fone丶峰
 * @Date: 2019-11-05 10:53:12
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:08:45
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <demoTop gray text="Input">
    <Cell-Group title="使用方式">
      <Cell label="内容一">
        <Input />
      </Cell>
    </Cell-Group>
    <Cell-Group title="使用icon">
      <Cell>
        <Input icon="iconaccount" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="设置右边展示icon">
      <Cell label="手机号码">
        <Input @on-click="click" right-icon="iconinfo" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="展示单位">
      <Cell label="金额">
        <Input unity="元" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="禁用">
      <Cell label="金额">
        <Input disabled unity="元" />
      </Cell>
    </Cell-Group>
    <Cell-Group title="插入按钮">
      <Cell label="短信验证码">
        <template>
          <Input>
            <template>
              <Button type="text">发送验证码</Button>
            </template>
          </Input>
        </template>
      </Cell>
    </Cell-Group>
  </demoTop>
</template>
<script>
export default {
  methods: {
    click() {
      this.$Toast.info("消息");
    }
  }
};
</script>