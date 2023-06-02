import { createSlice } from "@reduxjs/toolkit";
import exampleContacts from '../../components/contacts/contacts.json'

const initialState = {
    contacts: [exampleContacts],
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
            console.log('dis', action)
            return {
                // state.filter(contact => action.payload !== contact.id)
                contacts: state.contacts.filter(item => item.id !== action.payload)
                // state.contacts.filter(item => item.id !== payload)
            }
        },
    },
});

export const phonebookReducer = itemSlice.reducer;
export const { addContact, deleteContact } = itemSlice.actions;