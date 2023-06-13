<template>
    <div>
        <h2>{{ title }}</h2>
        <h2>{{ subTitle }}</h2>
    </div>
</template>

<script setup>
const props = defineProps({
    title: { type:String, default: '' },
    subTitle: { type:String, default: '' }
})

</script>