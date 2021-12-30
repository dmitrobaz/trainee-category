import React, { useEffect, useState } from 'react';

import { MdClear } from 'react-icons/md';

const SearchCategory = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [visibleClear, setVisibleClear] = useState<boolean>(false)

    const onChangeHandler = (e: any) => {
        setInputValue(e.target.value)
        !visibleClear && setVisibleClear(true)
    }

    useEffect(() => {
        inputValue === '' && setVisibleClear(false)
    }, [inputValue])
    
    return (
        <div className='category-search'>
            <input
                className='category-search'
                id='search-input'
                type="text"
                placeholder='Search product'
                value={inputValue}
                onChange={(e: any) => onChangeHandler(e)} />
            {visibleClear && <button className='category-search-clear' onClick={() => setInputValue('')}><MdClear /></button>}
            <button className='category-button'>Search</button>
        </div>
    );
};

export default SearchCategory;