<template>
  <button :class="tClass" :disabled="disabled">
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "tButton",
};
</script>
<script setup>
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  disabled: Boolean,
  round: Boolean,
});
const tClass = computed(() => {
  return [
    "t-button",
    `t-button-${props.type}`,
    props.disabled ? "t-button-disabled" : "",
    props.round ? "t-button-round" : "",
  ];
});
</script>
<style scoped lang="scss">
.t-button {
  border: 0;
  padding: 12px 24px;
  outline: none;
  background: none;
  line-height: 1;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.t-button-default {
  color: #333;
  border: 1px solid #dcdfe6;
  &:hover,
  &:focus {
    color: $primary;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.t-button-primary {
  color: #fff;
  background: $primary;
  border-color: $primary;
}
.t-button-success {
  color: #fff;
  background: $success;
  border-color: $success;
}
.t-button-info {
  color: #fff;
  background: $info;
  border-color: $info;
}
.t-button-warning {
  color: #fff;
  background: $warning;
  border-color: $warning;
}
.t-button-danger {
  color: #fff;
  background: $error;
  border-color: $error;
}
.t-button-disabled {
  opacity: 0.4;
  cursor: no-drop;
  &:hover,
  &:focus {
    opacity: 0.4;
  }
}
.t-button-round {
  border-radius: 20px;
}
</style>
