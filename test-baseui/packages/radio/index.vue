<template>
  <div class="t-radio">
    <div
      class="t-item-radio"
      v-for="(item, index) in options"
      :key="index"
      @click="change(item, index)"
      :class="{ 't-item-disabled-radio': item.disabled }"
    >
      <span :class="{ active: radioIndex === index }"></span>{{ item[filedLabel] }}
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "tRadio",
};
</script>

<script setup>
const emit = defineEmits("change");
const radioIndex = ref(-1);
const change = (e, index) => {
  if (!e.disabled) {
    radioIndex.value = index;
    emit("change", e);
  }
};
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  inline: {
    type: Boolean,
    default: true,
    // default: false,
  },
  filedLabel: {
    type: String,
    default: "label",
  },
  filedValue: {
    type: String,
    default: "value",
  },
  customColor: {
    type: String,
    default: "#409EFF",
  },
});
const isInline = ref("inline-flex");
props.inline ? (isInline.value = "inline-flex") : (isInline.value = "flex");
</script>

<style scoped lang="scss">
.t-radio {
  width: 100%;
  height: auto;
  overflow: hidden;
  .t-item-radio {
    width: auto;
    height: auto;
    overflow: hidden;
    display: v-bind(isInline);
    align-items: center;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 15px;
    user-select: none;
    span {
      width: 14px;
      height: 14px;
      display: inline-block;
      position: relative;
      border: 1px solid #ccd2d7;
      border-radius: 50%;
      margin: 3px 8px 0 0;
      background: #fff;
      transition: transform 0.15s ease-in;
      &::after {
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -2.5px 0 0 -2.5px;
        transition: transform 0.15s ease-in;
      }
    }
    span.active {
      background: v-bind("props.customColor");
      border: 1px solid v-bind("props.customColor");
    }
  }
  .t-item-disabled-radio {
    cursor: no-drop;
    color: #808080;
    span {
      border: 1px solid #b9b9b9;
      background: #ebebeb;
      &::after {
        background-color: #999;
      }
    }
  }
}
</style>
