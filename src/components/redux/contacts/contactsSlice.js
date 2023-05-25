import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import contacts from '../../contacts/contacts.json';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contacts,
    reducers: {

        createContact(state, action) {
            if (state.some(contact => contact.name === action.payload.name)) {
                Notify.warning(`${action.payload.name} is already in contacts`);
                return;
            }
            state.push({ id: nanoid(), name: action.payload.name, number: action.payload.number})
        },

        removeContact(state, action) {
            return state.filter(contact => action.payload !== contact.id)
        }

    }
});

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {

        setFilter(state, action) {
            return action.payload.target.value;
        },

    }
});

export const { createContact, removeContact } = contactsSlice.actions;
export const { setFilter } = filterSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const filterReducer = filterSlice.reducer;