  
import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo',{
    state: ()=> ({
        todo: [
            { id:1, name:"Anik Das", fav:true },
            { id:2, name:"koyel Das", fav:false }
        ],
        name: "pinia"
    }),
    getters: {
        favs() {
            return this.todo.filter( t => t.fav)
        },
        favCount (){
            return this.todo.reduce((p,c) => {
                return c.fav ? p + 1 : p
            }, 0)
        },
        totalCount: (state)=> {
            return state.todo.length
        }
    },
    actions: {
       addTodo(todo){
        this.todo.push(todo)
       },
       deleteTodo(id){
         this.todo = this.todo.filter(t=>{
            return t.id != id
         })
       },
       toggleFav(id){
         const task = this.todo.find(t => t.id === id)
         task.fav = !task.fav
       }       
    }
})