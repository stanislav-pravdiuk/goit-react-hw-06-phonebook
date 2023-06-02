import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
};

const itemSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        addContact: (state, action) => {
            console.log('add', action.payload)
            return {
                contacts: [action.payload, ...state.contacts]
            }
        },

        deleteContact: (state, action) => {
            console.log('del', action.payload)
            return {
                contacts: state.contacts.filter(item => item.name !== action.payload)
            }
        },
    },
});

export const phonebookReducer = itemSlice.reducer;
export const { addContact, deleteContact } = itemSlice.actions;