import React from 'react';

const SearchBox = ({filterItems}) => {
    return (
        <React.Fragment>
            <label htmlFor="site-search">Search item:</label>
            <input type="search" id="site-search" name="q" aria-label="Search through site content"
                   onChange={filterItems}/>
        </React.Fragment>
    );
};

export default SearchBox;
