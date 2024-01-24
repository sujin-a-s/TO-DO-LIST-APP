import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"todo",
    initialState : {
        todolists : [],
        completedLists : [],

    },
    reducers : {
        addToDoLists : (state,action) => {
            
            state.todolists.push(action.payload);
            
        },
        deleteToDoLists : (state,action) => {
            
            state.todolists = state.todolists.filter((item) => item.title !== action.payload);
            
        },
        addCompletedLists : (state,action) => {
            
            state.completedLists.push(action.payload)
            
        }
    }
}
)

export const{addToDoLists,deleteToDoLists,addCompletedLists} = appSlice.actions;
export default appSlice.reducer;