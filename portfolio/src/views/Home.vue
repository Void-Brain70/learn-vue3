<template>
    <div>
     <PageHeading title="Vue3 Learn" />
     <SlotSection>
        <div>
        <h1>Slot pass from APP</h1>
      </div>
     </SlotSection>
     <DataPass @increase-by="increaseCount"/>
     <Counter/>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted, provide, reactive, ref, watch } from 'vue'

  import Counter from '../components/Common/Counter.vue';
import DataPass from '../components/Common/DataPass.vue';
import PageHeading from '../components/Common/PageHeading.vue';
import SlotSection from '../components/Common/SlotSection.vue';
  
  const count = ref(0)
  
  const increaseCount = (n)=> {
    count.value += n
  }
  provide('message', 'Hello World')
  </script> 
  
  <style scoped>
  </style>