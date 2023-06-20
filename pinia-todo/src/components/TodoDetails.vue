<template>
    <div class="todo">
        <h3>{{ todo.name }}</h3>
        <div class="icons">
           <i class="material-icons">delete</i>
           <i class="material-icons">favorite</i>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    todo: { type:Object, default: ''}
})


</script>

<style lang="scss" scoped>

</style>