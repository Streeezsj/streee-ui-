<template>
  <div class="t-tree">
    <li v-for="(item, index) in newOptions" :key="index" @click.stop="isOpen(item)">
      {{ item.label }}
      <Transition name="slide-fade">
        <ul v-show="item.isOpened" v-if="item.children && item.children.length">
          <t-tree :options="item.children"> </t-tree>
        </ul>
      </Transition>
    </li>
  </div>
</template>

<script>
export default {
  name: "tTree",
};
</script>

<script setup>
import { ref } from "vue";
//define只读不能被修改
const props = defineProps({
  options: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
// console.log(props.options);
const newOptions = ref(props.options);
const isShow = ref(false);
const isOpen = (item) => {
  item.isOpened = !item.isOpened;
};
</script>

<style scoped lang="scss">
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.t-tree {
  display: inline-block;
  gap: 10px 10px;
}
</style>
