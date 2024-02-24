import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import mainReducer from ".";
const Store=configureStore({
    reducer:mainReducer,
    middleware:((getDefaultMiddleware:any)=>getDefaultMiddleware([thunk],{serializableCheck: false}))


})
export default Store