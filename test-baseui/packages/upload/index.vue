<template>
  <div>
    <input
      type="file"
      class="file-input"
      ref="inpRef"
      @change="inpChange"
      :multiple="multiple"
    />
    <t-button @click="fileChange" :type="btnType">{{ label }}</t-button>
    <div class="fileList-box">
      <li v-for="(item, index) in fileList" :key="index">
        <span>{{ item.name }}</span>
        <span class="delete-span" @click="deleteFile(index)">删除</span>
      </li>
    </div>
    <div class="area-box" ref="areaRef" :class="{ activeArea: isActive }"></div>
  </div>
</template>

<script>
export default {
  name: "tUpload",
};
</script>

<script setup>
import { ref, reactive, toRefs, onMounted } from "vue";
import tButton from "../button/index.js";
const emit = defineEmits(["change"]);
const props = defineProps({
  multiple: Boolean,
  label: {
    type: String,
    default: "选择文件",
  },
  btnType: {
    type: String,
    default: "primary",
  },
});

const fileList = reactive([]);
const inpRef = ref(null);
const areaRef = ref(null);
const isActive = ref(false);
const fileChange = () => {
  inpRef.value.click();
};
const inpChange = (e) => {
  fileList.unshift(...e.target.files);
  emit("change", fileList);
};
const deleteFile = (index) => {
  fileList.splice(index, 1);
};
onMounted(() => {
  let dropArea = areaRef.value;
  dropArea.addEventListener(
    "drop",
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      fileList.unshift(...e.dataTransfer.files);
      emit("change", fileList);
      isActive.value = false;
    },
    false
  );
  //离开area时候
  dropArea.addEventListener("dragleave", (e) => {
    e.stopPropagation();
    e.preventDefault();
    isActive.value = false;
    // console.log('经过');
  });
  //进入area时候
  dropArea.addEventListener("dragenter", (e) => {
    e.stopPropagation();
    e.preventDefault();
    isActive.value = true;
    // console.log("进入");
  });
  dropArea.addEventListener("dragover", (e) => {
    e.stopPropagation();
    e.preventDefault();
    isActive.value = true;
    // console.log('鼠标松开');
  });
});
</script>

<style scoped lang="scss">
.file-input {
  display: none;
}
.fileList-box {
  li {
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .delete-span {
    cursor: pointer;
  }
}
.area-box {
  width: 200px;
  height: 200px;
  border: 1px dashed #000;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    border-color: rgb(31, 10, 188);
  }
}

.activeArea {
  border-color: rgb(6, 154, 105);
}
</style>
