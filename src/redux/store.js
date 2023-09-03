import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filters/filterSlice.js";
import TodoSlice from "../components/TodoList/TodoSlice.js";
const store=configureStore({
    reducer:{
        filters:filterSlice,
        todoList:TodoSlice
    }
})

export default store;