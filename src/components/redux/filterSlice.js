import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: 'fdbf',
    reducers: {
        filterContacts: (state, action) => {
            console.log(action)
            return {
                filter: action.payload
            }
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;

