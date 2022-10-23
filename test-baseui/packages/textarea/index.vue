<template>
  <div :class="tClass">
    <textarea
      name=""
      id=""
      :cols="cols"
      :rows="rows"
      :value="modelValue"
      @input="input"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      @focus="focus"
      @blur="blur"
      :maxlength="maxlength"
      :style="tStyle"
    ></textarea>
    <div class="max-length-inline">{{ n }}/{{ maxlength }}</div>
  </div>
</template>
<script>
export default {
  name: "tTextarea",
};
</script>
<script setup>
import { computed, ref } from "vue";
const emit = defineEmits(["update:modelValue", "focus", "blur"]);
const props = defineProps({
  modelValue: String,
  rows: {
    type: Number,
    default: 4,
  },
  cols: {
    type: Number,
    default: 50,
  },
  resize: {
    type: Boolean,
    default: true,
  },
  disabled: Boolean,
  readonly: Boolean,
  placeholder: String,
  maxlength: Number,
});
const n = ref(0);
const input = (e) => {
  n.value = e.target.value.length;
  if (n.value > props.maxlength) {
    n.value = props.maxlength;
  }
  console.log(e.target.value);
  emit("update:modelValue", e.target.value);
};
const tClass = computed(() => {
  return {
    "t-textarea": true,
    "t-textarea-disabled": props.disabled,
  };
});
const tStyle = computed(() => {
  return {
    resize: props.resize ? "auto" : "none",
  };
});
const focus = (e) => {
  emit("focus", e.target.value);
};
const blur = (e) => {
  emit("blur", e);
};
</script>
<style scoped lang="scss">
.t-textarea {
  width: auto;
  height: auto;
  display: inline-block;
  overflow: hidden;
  position: relative;
  textarea {
    padding: 8px 8px 10px 8px;
    outline: none;
    border-radius: 4px;
    font-size: 14px;
    font-family: auto;
    color: $color;

    &:focus {
      border: 1px solid $primary;
    }
  }
  textarea::placeholder {
    color: rgb(157, 171, 171);
  }
  .max-length-inline {
    width: 100%;
    line-height: 20px;
    font-size: 12px;
    text-align: right;
    padding: 0 10px;
    color: #aeafb3;
    position: absolute;
    box-sizing: border-box;
    bottom: 10px;
  }
}
.t-textarea-disabled {
  textarea {
    cursor: no-drop;
  }
}
</style>
