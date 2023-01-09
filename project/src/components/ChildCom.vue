<template>
    <div>
        <h1>Child Component</h1>
        <p>{{ user.email }}</p>
        <p>{{ user.pass }}</p>
        <button v-on:click="getItem()" >Click</button>
    </div>
</template>

<script>
export default {
    name : "ChildCom",
    props : {
        user: Object,
        getItem : Function,
    },
}
</script>
<style scoped>

</style>