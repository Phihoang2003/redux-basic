import { createSlice } from "@reduxjs/toolkit";

var filterSlice=createSlice({
    name:"filters",
    initialState:{
        search:"",
        status:"All",
        properties:[]
    },
    reducers:{
        searchFilterChange:(state,action)=>{
            state.search=action.payload
        },
        statusFilterChange:(state,action)=>{
            state.status=action.payload
        },
        propertiesFilterChange:(state,action)=>{
            state.properties=action.payload
        }
    }
})

export const {searchFilterChange,statusFilterChange,propertiesFilterChange}=filterSlice.actions

export default filterSlice.reducer

