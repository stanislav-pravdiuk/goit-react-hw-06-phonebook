import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
};

const itemSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        addContact: (state, action) => {
            return {
                contacts: [action.payload, ...state.contacts]
            }
        },

        deleteContact: (state, { payload }) => {
            return {
                contacts: state.contacts.filter(item => item.id !== payload)
            }
        },
    },
});

export const phonebookReducer = itemSlice.reducer;
export const { addContact, deleteContact } = itemSlice.actions;