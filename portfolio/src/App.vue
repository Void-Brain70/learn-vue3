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
    <br>
    <div :class="isActive ? 'primary': 'info'">
      <img :src="img" />
    </div>
    <div :class="{ 'text-ok': isActive, 'text-danger': hasError}">
      I am anik, I am CSE student, and now i am a software engineer
    </div>
    <div>
      <p>Template Ref</p>
      <input type="text" ref="input">
    </div>
    <div>
      <button @click="showModal=true">Show Modal</button>
      <div v-if="showModal">
        <h1>Anik Das</h1>
        <button @click="showModal=false" >Hide Modal</button>
      </div>
    </div> 
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'

//Data define ref and reactive
let isActive =ref(true)
let hasError= ref(true )

let img =  ref('https//picsum.photos/200')

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

let input = ref(null);

let showModal = ref(false);

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

onMounted(()=> {
  input.value.focus();
})

</script>

<style scoped>

.primary{
  background-color: aqua;
}

.info{
  background-color: blueviolet;
}

.text-ok{
  color:indigo;
  font-size: 18px;
}

.text-danger{
  color:indianred;
  font-size: 16px;
}
</style>