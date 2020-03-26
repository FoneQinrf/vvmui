<template>
  <demoTop gray text="Checkbox">
    <section class="demo-button-row">
      <h3>基本用法</h3>
      <div class="cell">
        <G-Checkbox>选项</G-Checkbox>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>type类型</h3>
      <div class="cell">
        <G-Checkbox-Group>
          <G-Checkbox type="default" label="default"></G-Checkbox>
          <G-Checkbox type="errer" label="errer"></G-Checkbox>
          <G-Checkbox type="success" label="success"></G-Checkbox>
          <G-Checkbox type="warning" label="warning"></G-Checkbox>
        </G-Checkbox-Group>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>搭配CheckboxGroup使用</h3>
      <div class="cell">
        <G-Checkbox-Group>
          <G-Checkbox label="选项一" />
          <G-Checkbox label="选项二" />
          <G-Checkbox label="选项三" />
        </G-Checkbox-Group>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>v-model绑定</h3>
      <div class="cell">
        <G-Checkbox-Group v-model="model">
          <G-Checkbox label="选项一" />
          <G-Checkbox label="选项二" />
          <G-Checkbox label="选项三" />
        </G-Checkbox-Group>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>禁用</h3>
      <div class="cell">
        <G-Checkbox-Group :value="['选项二']">
          <G-Checkbox disabled label="选项一" />
          <G-Checkbox disabled label="选项二" />
          <G-Checkbox label="选项三" />
        </G-Checkbox-Group>
      </div>
    </section>
    <section v-if="false" class="demo-button-row">
      <h3>禁用</h3>
      <div class="cell">
        <G-Checkbox-Group disabled :value="['选项二']">
          <G-Checkbox label="选项一" />
          <G-Checkbox label="选项二" />
          <G-Checkbox label="选项三" />
        </G-Checkbox-Group>
      </div>
    </section>
    <section v-if="false" class="demo-button-row">
      <h3>禁用</h3>
      <div class="cell">
        <G-Checkbox-Group type="success" :value="['选项二']">
          <G-Checkbox label="选项一" />
          <G-Checkbox label="选项二" />
          <G-Checkbox label="选项三" />
        </G-Checkbox-Group>
      </div>
    </section>
    <section v-if="false" class="demo-button-row">
      <h3>禁用</h3>
      <div class="cell">
        <G-Checkbox-Group icon="iconradioactive" :value="['选项二']">
          <G-Checkbox label="选项一" />
          <G-Checkbox label="选项二" />
          <G-Checkbox label="选项三" />
        </G-Checkbox-Group>
      </div>
    </section>
    <section class="demo-button-row">
      <h3>change事件</h3>
      <div class="cell">
        <G-Checkbox-Group @on-change="change">
          <G-Checkbox label="选项一" />
          <G-Checkbox label="选项二" />
          <G-Checkbox label="选项三" />
        </G-Checkbox-Group>
      </div>
    </section>
  </demoTop>
</template>

<script>
export default {
  data() {
    return {
      model: ["选项二"]
    };
  },
  methods: {
    change(val) {
      this.$Toast.info(`选中：${val}`);
    }
  }
};
</script>

<style lang="less" scoped>
.demo-button-row {
  padding: 0 15px;
  h3 {
    margin: 0;
    padding: 15px 0;
    color: #84849a;
    font-weight: normal;
    font-size: 14px;
  }
}
</style>