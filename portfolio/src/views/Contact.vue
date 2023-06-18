<template>
    <div>
        <h1>Contact Page</h1>
        {{ counterStore.title }}

    </div>
</template>

<script setup>
import { useCounterStore } from '../store/counter';

const counterStore = useCounterStore();

</script>