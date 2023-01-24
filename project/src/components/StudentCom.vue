<template>
    <div>
        <h3>Student Component Use For Props</h3>
        <h4>Student name is : {{ name }}</h4>
    </div>
</template>

<script>
export default {
    name: "StudentCom",
    props: {
        name : String,
    }
}
</script>
<style scoped>

</style>