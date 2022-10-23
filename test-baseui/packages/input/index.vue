<template>
  <div :class="tClass">
    <input
      type="text"
      :value="modelValue"
      @input="input"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <span class="clear-icon" :style="clearStyle" @click="clearInput"><i>x</i></span>
  </div>
</template>
<script>
export default {
  name: "tInput",
};
</script>
<script setup>
import { computed } from "vue";
//抛出一个事件，更新那个值
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: String | Number,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
});
const input = (e) => {
  console.log(e.target.value);
  emit("update:modelValue", e.target.value);
};
const tClass = computed(() => {
  return [
    "t-input",
    {
      "t-input-disabled": props.disabled,
    },
  ];
});
const clearStyle = computed(() => {
  return [
    {
      display: props.modelValue ? "block" : "none",
    },
  ];
});
const clearInput = () => {
  emit("update:modelValue", "");
};
</script>
<style scoped lang="scss">
.t-input {
  display: inline-block;
  min-width: 250px;

  input {
    outline: none;
    border: 1px solid $border;
    line-height: 1;
    padding: 10px 8px;
    width: 100%;
    font-size: 14px;
    color: $color;
    border-radius: 4px;
    transition: all 0.15s ease;

    &:focus {
      border-color: $primary;
    }
  }

  .clear-icon {
    position: relative;
    bottom: 30px;
    left: 235px;
    cursor: pointer;
  }
}

.t-input-disabled {
  input {
    cursor: no-drop;
  }
}
</style>
