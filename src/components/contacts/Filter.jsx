import React from "react";
import css from './filter.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getContactsFilter } from "components/redux/selectors";
// import PropTypes from 'prop-types';
import { filterContacts } from "components/redux/filterSlice";

function Filter() {
    
    const dispatch = useDispatch();
    const filter = useSelector(getContactsFilter)

    return (
        <label className={css.filter}>Find contacts by name
            <input
                type="text"
                value={filter}
                onChange={() => dispatch(filterContacts(filter))}
            >
            </input>
        </label>
    );
};

// Filter.propTypes = {
//     filter: PropTypes.string,
//     onChange: PropTypes.func.isRequired
// }

export default Filter;