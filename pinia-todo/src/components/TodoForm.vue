<template>
    <div>
        <form @submit.prevent>
            <input type="text" placeholder="Add todo" v-model="newTodo" />
            <button @click="handleSubmit">Add</button>
        </form>
        {{ addTodo }}
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../store/todo';

const todoStore = useTodoStore();
const newTodo = ref('');

const handleSubmit = () => {
    const fromData =
    {
        name: newTodo.value,
        fav: false,
        id: Math.floor(Math.random() * 10000)
    }
    if (newTodo.value.length > 0) {
        todoStore.addTodo(fromData)
        newTodo.value = ''
    }
}

</script>

<style lang="scss" scoped></style>