import { configureStore } from "@reduxjs/toolkit";
import counterRedcer from './Slice/CounterSlice'


export const store =configureStore({
    reducer:{
        counter:counterRedcer,
    }
})