<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-html="tag">
    </div>
    <h3 :class="{color:tagColor}">Class Binding</h3>
    <button v-on:click="tagColor=!tagColor">Apply Color</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      tag : '<h3>HTML Binding</h3>',
      tagColor : false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color{
  background-color: cornflowerblue;
}
</style>
