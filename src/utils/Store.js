import { configureStore, } from "@reduxjs/toolkit";
import appReducer from "./appSlice"
import searchSlice from "./searchSlice"
import chatSlice from "./chatSlice"
 const Store = configureStore({
     reducer:{
        app:appReducer,
        search:searchSlice,
        chat:chatSlice
     },
 });
 export default Store