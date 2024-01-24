import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const appStore = configureStore({
    reducer : {
        todolist : appSlice
    }
})

export default appStore;