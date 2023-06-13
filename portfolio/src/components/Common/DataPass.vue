<template>
    <div>
        <button @click="$emit('increaseBy', 1)">
            Increase by
        </button>
        <p>{{ m }}</p>
    </div>
</template>

<script setup>
import { inject } from "vue";


const m = inject('message')

</script>

