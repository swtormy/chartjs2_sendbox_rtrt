import { configureStore } from "@reduxjs/toolkit";
import statesSlice from "./slices/statesSlice";

export const store = configureStore({
    reducer:{
        states: statesSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch