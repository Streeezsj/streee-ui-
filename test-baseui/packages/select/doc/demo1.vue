<template>
  <div>
    <t-select
      :options="options"
      @change="change"
      :placeholder="请输入"
      v-model="SelVal"
    ></t-select>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
const SelVal = ref("选项2");
const state = reactive({
  options: [
    {
      value: "选项1",
      label: "黄金糕",
    },
    {
      value: "选项2",
      label: "双皮奶",
      disabled: true,
    },
    {
      value: "选项3",
      label: "蚵仔煎",
    },
    {
      value: "选项4",
      label: "龙须面",
      disabled: true,
    },
    {
      value: "选项5",
      label: "北京烤鸭",
    },
  ],
});
const { options } = state;
const change = (e) => {
  console.log(SelVal.value);
};
</script>
<style scoped lang="scss"></style>
