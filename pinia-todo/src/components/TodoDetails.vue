<template>
    <div class="todo">
        <h3>{{ todo.name }}</h3>
        <div class="icons">
           <i @click="todoStore.deleteTodo(todo.id)" class="material-icons">delete</i>
           <i @click="todoStore.toggleFav(todo.id)"
           :class="{ active: todo.fav }"  
           class="material-icons">favorite</i>
        </div>
    </div>
</template>

<script setup>
import { useTodoStore } from '../store/todo';
const props = defineProps({
    todo: { type:Object, default: ''}
})

const todoStore = useTodoStore()




</script>

<style lang="scss" scoped>

</style>