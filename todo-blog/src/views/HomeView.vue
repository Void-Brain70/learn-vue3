<template>
  <div class="home">
    <h1>Welcome to ToDo Blog</h1>
    <p @click="changedName">Author-> {{ name }}</p>
    <button @click="clickPop" >See Magic</button>
    <h3>Player Info</h3>
    <p>Name-> {{ data.playerName }}</p>
    <p>Club-> {{ data.club }}</p>
    <p>Nation Team-> {{ data.nationalTeam }}</p>
    <p>Trophy-> {{ data.trophy }}</p>
    <p>Contribution-> {{ contribution }}</p>
    <input
      type="number"
      placeholder="Enter any number then strat count from here"
      v-model="count"
    />
    <br />
    <br />
    <div>
      <button @click="increment(1)">+</button>
      <h3>{{ count }} / {{ checkOddEven }}</h3>
      <button @click="decrement(1)">-</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
//ref data
let count = ref(0);
// count.value = 1;
const name = ref("Anik Das");
//reactive data
const data = reactive({
  playerName: "Lionel Messi",
  club: "PSG",
  nationalTeam: "Argentina",
  trophy: 41,
  goal : 795,
  assist : 350
});
data.trophy = 42;
//non reactive data
const worldCup = "Messi won world cup Qatar 2022";

//Methods
// function increment(a){
//    count.value += a;
// }
// function decrement(a){
//    count.value -= a;
// }
//ES6
const increment = a => count.value += a;
const decrement = a => count.value -= a;

const changedName = ()=> name.value = "Aporna Das"

const clickPop = ()=>{
  alert('I am Anik Das')
}

//Computed
const contribution = computed(()=>{
  return data.goal + data.assist;
})
const checkOddEven = computed(()=>{
  if(count.value %2 == 0){
    return 'even'
  }
  else {
    return 'odd'
  }
})

//Watch
watch(()=> count.value, (newVal, oldVal)=> {
  console.log('New', newVal);
  console.log('Old', oldVal);
})

</script>
