<template>
    <div>
        <h1>Service Page</h1>
        <button @click="goHome" >Go to HomePage</button>
        <ul>
            <li v-for="(item, i ) in items" :key="i">
                <router-link :to="{name:'single-service', params:{id: item.name}}">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const items = ref([
    { id:1, name:'Web Design'},
    { id:2, name:'Web Development'},
    { id:3, name:'UI/UX'},
    { id:4, name:'LSM'}
])

const goHome = ()=> {
    router.push({name: 'home'})
}
</script>