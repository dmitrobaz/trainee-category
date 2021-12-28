import React from 'react';

const SearchCategory = () => {
    return (
        <div className='category-search'>
            <input className='category-search' type="text" placeholder='Search product' />
            <button className='category-button'>Search</button>
        </div>
    );
};

export default SearchCategory;