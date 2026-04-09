import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/CounterSlice'

let store = configureStore({
    reducer:{
        'counter': counterReducer
    }
})

export {store}