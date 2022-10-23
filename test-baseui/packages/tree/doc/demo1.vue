<template>
  <div>
    <t-tree :options="treeOptions"></t-tree>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  treeOptions: [
    {
      label: "一级",
      children: [
        {
          label: "一级-1",
        },
        {
          label: "一级-2",
        },
        {
          label: "一级-3",
          children: [
            {
              label: "一级-3-1",
            },
            {
              label: "一级-3-2",
            },
            {
              label: "一级-3-3",
            },
          ],
        },
      ],
    },
    {
      label: "二级",
      children: [
        {
          label: "二级-1",
        },
        {
          label: "二级-2",
        },
        {
          label: "二级-3",
          children: [
            {
              label: "二级-3-1",
            },
            {
              label: "二级-3-2",
            },
            {
              label: "二级-3-3",
            },
          ],
        },
      ],
    },
    {
      label: "三级",
      children: [
        {
          label: "三级-1",
        },
        {
          label: "三级-2",
        },
        {
          label: "三级-3",
          children: [
            {
              label: "三级-3-1",
            },
            {
              label: "三级-3-2",
            },
            {
              label: "三级-3-3",
            },
          ],
        },
      ],
    },
  ],
});
const { treeOptions } = state;
</script>
<style scoped lang="scss"></style>
