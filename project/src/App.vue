<template>
  <div>
    <HelloWorld msg="Welcome to Vue3" />
    <HomePage></HomePage>
    <StudentCom name="Anik"></StudentCom>
    <TeacherCom></TeacherCom>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HomePage from "./components/HomePage.vue";
import StudentCom from "./components/StudentCom.vue";
import TeacherCom from "./components/TeacherCom.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HomePage,
    StudentCom,
    TeacherCom
},
};
</script>

<style></style>
