<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Add todo" v-model="newTodo" />
            <button>Add</button>
        </form>
        {{ newTodo }}
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../store/todo';

const todoStore = useTodoStore();

const newTodo = ref('');

const handleSubmit = ()=> {
    if (newTodo.value.length > 0){
        todoStore.addTodo({
            name: newTodo.value,
            fav: false,
            id: Math.floor(Math.random() * 10000) 
        })
        newTodo.value = ''
    }   
}

</script>

<style lang="scss" scoped>

</style>