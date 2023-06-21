<template>
  <main>
    <!-- heading -->
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo">
      <h1>Pinia Todo</h1>
    </header>

    <!-- New Todo  -->
    <div class="new-todo-form">
      <todo-form />
    </div>
    
    <!-- Filter List  -->
    <nav class="filter-list">
      <button @click="filter = 'all'" >All List</button>
      <button @click="filter = 'favs'">Fav List</button>
    </nav>
    
    <!-- Todo List  -->
    <div v-if="filter === 'all'" class="todo-list">
      <p>You have {{ todoInfo.totalCount }} todo left to do</p> 
      <div v-for="(todo, i) in todoInfo.todo" :key="i">
         <todo-details :todo="todo" />
      </div>
    </div>

    <div v-if="filter === 'favs'" class="todo-list"> 
      <p>You have {{ todoInfo.favCount }} favs list to do </p>
      <div v-for="(todo, i) in todoInfo.favs" :key="i">
         <todo-details :todo="todo" />
      </div>
    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue';
import TodoDetails from './components/TodoDetails.vue';
import { useTodoStore } from './store/todo';
import TodoForm from './components/TodoForm.vue';

const todoInfo = useTodoStore();

const filter = ref('all')

</script>