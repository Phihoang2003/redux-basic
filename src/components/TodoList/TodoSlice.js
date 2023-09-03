import { createSlice } from "@reduxjs/toolkit";

const todoList=createSlice({
    name:"todoList",
    initialState:[
        { id: 1, name: 'Learn Yoga', completed: false, prioriry: 'Medium' },
        { id: 2, name: 'Learn Redux', completed: true, prioriry: 'High' },
        { id: 3, name: 'Learn JavaScript', completed: false, prioriry: 'Low' },
    ],
    reducers:{
        addToDo:(state,action)=>{
            state.push(action.payload)
        },
        toggleTodoStatus:(state,action)=>{
            var currenTodo=state.find(todo=>todo.id===action.payload)
            if(currenTodo){
                currenTodo.completed=!currenTodo.completed
            }
        }
    }
})
export const {addToDo,toggleTodoStatus}=todoList.actions;
export default todoList.reducer;
