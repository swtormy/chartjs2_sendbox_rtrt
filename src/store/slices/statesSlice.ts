import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

type States = {
    data: number[]
}

const initialState: States = {
    data: []
}

export const statesSlice = createSlice({
    name: 'states',
    initialState,
    reducers: {}
})

export const {} = statesSlice.actions
export default statesSlice.reducer