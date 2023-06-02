import React from "react";
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { getPhoneBookItems } from "components/redux/selectors";
import { deleteContact } from "components/redux/contactsSlice";

function ContactList() {

        const dispatch = useDispatch();

        const contacts = useSelector(getPhoneBookItems);
        console.log(contacts)
        return (
                <ul>
                        {contacts.map((el) =>
                                <li key={el.id}>
                                        <span>{el.name} {el.number}</span>
                                        <button onClick={() => dispatch(deleteContact(el.id))}>Delete</button>
                                        {/* <button onClick={() => onRemoveContact(el.id)}>Delete</button> */}
                                </li>)}
                </ul>
        );
};

// ContactList.propTypes = {
//         contacts: PropTypes.arrayOf(Object).isRequired,
//         onDeleteContact: PropTypes.func.isRequired
// }

export default ContactList;