import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleSearchChange }) => {
    // Functions components do not have access to "constructor(as they r not class as they r functions), state(they dont have internal state) and LifeCycle methods"
    // Sometime we just want to receive props and return some jsx in such cases we use Fun. Components

    return (
        <div>
            <input type="search" name="search-monster" id="search-box" placeholder={placeholder} className="search-box"
                onChange={handleSearchChange} />
        </div>
    );

};

export default SearchBox;