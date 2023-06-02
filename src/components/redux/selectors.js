export const getPhoneBookItems = state => state.contacts.contacts; 

export const getContactsFilter = state => state.filter.filter;

export const getFilteredContacts = state => {
    const contacts = getPhoneBookItems(state);
    const filter = getContactsFilter(state);
    const getFilteredContacts = contacts.filter(item => item.name.includes(filter));
    return getFilteredContacts;
};