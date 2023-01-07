<template>
  <div>
    <HelloWorld msg="Welcome to Vue3" />
    <HomePage></HomePage>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HomePage,
  },
};
</script>

<style></style>
