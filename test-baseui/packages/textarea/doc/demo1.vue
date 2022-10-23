<template>
  <t-textarea
    v-model="textVal"
    :rows="5"
    placeholder="请输入"
    :maxlength="100"
    :resize="false"
  ></t-textarea>

  <!-- <p>{{ textVal }}</p> -->
</template>

<script setup>
import { ref } from "vue";
const textVal = ref("");
</script>
<style scoped lang="scss"></style>
