<template>
  <div>
    <t-select
      :options="options"
      filedLabel="name"
      filedValue="name"
      :placeholder="请输入"
    ></t-select>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: [
    {
      id: "选项1",
      name: "黄金糕",
    },
    {
      id: "选项2",
      name: "双皮奶",
      disabled: true,
    },
    {
      id: "选项3",
      name: "蚵仔煎",
    },
    {
      id: "选项4",
      name: "龙须面",
      disabled: true,
    },
    {
      id: "选项5",
      name: "北京烤鸭",
    },
  ],
});
const { options } = state;
</script>
<style scoped lang="scss"></style>
