<template>
  <div class="container">
    <t-input v-model="Val" placeholder="请输入" disabled></t-input>
    <t-input v-model="Val" placeholder="请输入"></t-input>
  </div>
</template>

<script setup>
import { ref } from "@vue/runtime-dom";

const Val = ref("");
</script>

<style lang="scss" scoped></style>
