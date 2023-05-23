import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const myValueSlice = createSlice({
    name: 'myValue',
    initialState: 150,
    reducers: {
        increment(state, action) {
            return state + action.payload;
        },
        decrement(state, action) {
            return state - action.payload;
        }
    }
})

export const { increment, decrement } = myValueSlice.actions;

export const store = configureStore({
    reducer: {
        myValue: myValueSlice.reducer,
    },
});