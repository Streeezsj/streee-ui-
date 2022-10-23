<template>
    <div class="t-button">
        <button><slot></slot></button>
    </div>
</template>
<script>
// import { log } from 'console';
export default {
    name:'tButton'
}
</script>
<script setup>

const props= defineProps({
    type:{
        type:String,
        default:"default"
    }
})

console.log('aaaaaa');
console.log('sadasd',props.type);

</script>

<style lang="scss" scoped>
button{
    outline: none;
    border:0;
    background: none;
    cursor: pointer;
}
.t-button{
    button{
        padding: 12px 24px;
        border-radius: 4px;
        border: 10px solid rgb(35, 209, 185);
    }
}
</style>