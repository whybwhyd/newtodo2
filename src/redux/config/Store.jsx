import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";

// ASIS: 일반 리듀서
// const rootReducer = combineReducers({
//     counter,
//     users,
// }); 
// const store = createStore(rootReducer);  TODO : Redux Toolkit

const Store = configureStore({
    reducer:{
        counter:counter,
    }
}); 

export default Store; 