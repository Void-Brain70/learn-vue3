import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter',{
    state: ()=> ({
        title : "Anik Das"
    })
})