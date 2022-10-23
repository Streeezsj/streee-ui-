<template>
  <div>
    <t-upload multiple @change="change" label="上传文件" btnType="success"></t-upload>
  </div>
</template>

<script setup>
const change = (files) => {
  console.log(files);
};
</script>
<style scoped lang="scss"></style>
