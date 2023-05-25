import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        createContact(state, action) {
            return state + action.payload;
        },

    }
});

export const contactsReducer = contactsSlice.reducer;
export const { createContact } = contactsSlice.actions;