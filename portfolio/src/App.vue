<template>
  <div>
    <h1>Welcome to Vue js 3</h1>
    <h2>Counter</h2>
    <button @click="count++">+</button>
    <p>{{  count }} / {{ checkOddEven }}</p>
    <button @click="count--">-</button>
    <br>
    <input type="text" v-model="info.name">
    <p>{{ info.name }}</p>
    <p>{{ info.id }}</p>
    <p @click="change">{{ info.dept }}</p>
    <br>
    <br>
    <p>Method Call and used</p>
    <br>
    <button @click="increment(2)">+</button>
    <p>{{ m }}</p>
    <button @click="decrement(2)">-</button>
    <br>
    <br>
    <p>Has published books: {{ publishedBooks }}</p>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'

//Data define ref and reactive
let count = ref(0);
let m = ref(0)
count.value= 10
let info = reactive({
  name: 'Anik Chandra',
  id: 18101070,
  dept: 'CSE'
})

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 1', 'Vue 2', 'Vue 3'
  ]
})

//Methods
const increment = n => m.value += n;
const decrement = n => m.value -= n;
const change = ()=> info.dept = "Computer Science and Engineering"

//Computed
const checkOddEven = computed(()=>{
  if(count.value %2 === 0){
    return "Even"
  }
  else{
    return "Odd"
  }
})

const publishedBooks = computed(()=>{
  return author.books.length > 0 ? 'Yes' : 'No'
})

//Watch
watch(()=> count.value, (newVal, oldval)=>{
  console.log('new', newVal);
  console.log('old', oldval);

  if(newVal>10){
    alert('Watch')
  }
})

watch(()=> m.value, ( newvalue, oldvalue) => {
  if(newvalue>10){
    alert('Ok')
  }
})

</script>