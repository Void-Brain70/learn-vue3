<template>
    <div>
        <h1>Information</h1>
        <h3> Name -> {{ name }}</h3>
        <h3> ID -> {{ id }}</h3>
        <h3> ID -> {{ id = '18101071'}}</h3>
        <h3> Department -> {{ dept }}</h3>
    </div>
</template>
<script>
export default {
    name : "HomePage",
    data(){
        return {
            name : "Anik Das",
            id : "18101070",
            dept : "CSE"
        }
    }
}
</script>
<style scoped>
h1{
    color: red;
}
</style>