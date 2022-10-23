<template>
  <div class="t-select" v-clickOutside>
    <input type="text" readonly :value="selectVal" :disabled="disabled" />
    <Transition name="fade">
      <div class="t-position-box" v-if="positionShow">
        <li
          v-for="(item, index) in options"
          :key="index"
          @click="change(item, index)"
          :class="{
            'item-disabled-li': item.disabled,
            'item-active-li': activeIndex === index,
          }"
          class="item-li"
        >
          {{ item[filedLabel] }}
        </li>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "tSelect",
};
</script>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["change", "update:modelValue"]);
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  disabled: Boolean,
  filedLabel: {
    type: String,
    default: "label",
  },
  filedValue: {
    type: String,
    default: "value",
  },
  placeholder: String,
  modelValue: String,
});
const positionShow = ref(false);
const selectVal = ref(props.modelValue);
const activeIndex = ref(-1);
const vClickOutside = {
  beforeMount(el) {
    let handler = (e) => {
      if (!props.disabled) {
        if (el.contains(e.target) && e.target.className.indexOf("item-li") == -1) {
          positionShow.value = true;
        } else {
          if (e.target.className.indexOf("item-disabled-li") == -1)
            positionShow.value = false;
        }
      }
    };
    document.addEventListener("click", handler);
  },
};
const change = (item, index) => {
  if (!item.disabled) {
    // selectVal.value = item.label;
    activeIndex.value = index;
    selectVal.value = item[props.filedLabel];
    // console.log("asdasd", item);
    positionShow.value = false;
    emit("change", item);
    emit("update:modelValue", item[props.filedLabel]);
  }
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.t-select {
  min-width: 250px;
  display: inline-block;
  height: 40px;
  position: relative;
  input {
    border: 1px solid $border;
    padding: 8px 10px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
  }
  .t-position-box {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: absolute;
    top: 42px;
    border: 1px solid $border;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    z-index: 99;
    background: #fff;
    li {
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        background: #f0f0f0;
      }
    }
    li.item-disabled-li {
      cursor: no-drop;
      color: #808080;
      background: #f0f0f0;
    }
    li.item-active-li {
      color: $primary;
    }
  }
}
</style>
