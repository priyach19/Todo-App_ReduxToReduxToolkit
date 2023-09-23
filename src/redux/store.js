
// const redux = require("redux");

//import * as redux from "redux";
//import { combineReducers } from "redux";
import { noteReducer } from "./reducers/noteReducer";
import {todoReducer} from "./reducers/todoReducer";
import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducer";

// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })

// export const store = redux.createStore(result);

//when using redux toolkit replate createStore to configureStore
export const store=configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer
    }
})



