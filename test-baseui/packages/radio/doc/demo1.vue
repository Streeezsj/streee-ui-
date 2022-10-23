<template>
  <div>
    <t-radio
      :options="options"
      filedLabel="name"
      filedValue="id"
      @change="change"
      customColor="#09b63d"
    ></t-radio>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
const state = reactive({
  options: [
    {
      id: "选项1",
      name: "黄金糕",
      disabled: true,
    },
    {
      id: "选项2",
      name: "双皮奶",
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
const change = (e) => {
  console.log(e);
};
</script>
<style scoped lang="scss"></style>
