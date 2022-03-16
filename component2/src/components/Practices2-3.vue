<script setup>


const props = defineProps({
    items:{
        type: Object,
        require: true
    }
})
console.log(props.items)

// $emits 1 : สร้าง defineEmits
defineEmits(['confirm'])
// $emits 2 : สร้าง function Emits
</script>
 
<template>
    <div>
        <ul>
        <li v-for="(item,index) in items" :key="index">
            {{item}}
        </li>
        </ul>
        <!-- // $emits 3 : สร้าง v-on -->
        <button @click="$emit('confirm','USER_CONFIRM')">confirm</button>
    </div>
</template>
 
<style>

</style>