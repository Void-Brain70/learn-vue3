<template>
  <div>
    <h1>Information</h1>
    <h3>Name -> {{ name }}</h3>
    <h3>ID -> {{ id }}</h3>
    <h3>ID -> {{ (id = "18101071") }}</h3>
    <h3>Department -> {{ dept }}</h3>
    <!-- <input type="text" v-model="count" /> -->
    <button class="mx-2" fab dark color="indigo" v-on:click="add()">
      <v-icon dark> + </v-icon>
    </button>
    <button class="mx-2" fab dark color="indigo" v-on:click="sub()">
      <v-icon dark> - </v-icon>
    </button>
    <h2>{{ count }}</h2>
    <input type="text" placeholder="Enter phone" v-model="phone" />
    <br>
    <br>
    <input type="password" placeholder="Password" v-model="password" />
    <br>
    <br>
    <button v-on:click="getData()" >Submit</button>
    <br>
    <h3>Technology</h3>
    <label for="js">JavaScript</label>
    <input type="checkbox" value="Js" id="js" v-model="technology">
    <label for="php">PHP</label>
    <input type="checkbox" value="php" id="php" v-model="technology">
    <label for="python">Python</label>
    <input type="checkbox" value="python" id="python" v-model="technology">
    <h3>Select Technology : {{ technology }}</h3>
    <h3 v-if="show">If condition</h3>
    <h3 v-else>else condition</h3>
    <button v-on:click="show=!show" >Toogle</button>
    <h3>For LOOP</h3>
    <ul>
        <li v-for="i in arr" :key="i" >
            {{ i }}
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      name: "Anik Das",
      id: "18101070",
      dept: "CSE",
      count: 0,
      phone: null,
      password: null,
      technology: [],
      show: true,
      arr: ["CSE","EEE","ME","BBA"],
    };
  },
  methods: {
    add() {
      this.count = this.count + 1;
    },
    sub() {
      this.count = this.count - 1;
    },
    getData(){
      console.log("Data:", this.phone,this.password)
    }
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style>
