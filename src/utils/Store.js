import { configureStore, } from "@reduxjs/toolkit";
import appReducer from "./appSlice"
 const Store = configureStore({
     reducer:{
        app:appReducer,
     },
 });
 export default Store