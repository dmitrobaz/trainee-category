import React, { useEffect, useState } from 'react';

import { MdClear } from 'react-icons/md';
import { useSelector } from 'react-redux';

const SearchCategory = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [visibleClear, setVisibleClear] = useState<boolean>(false)

    const categoryConfig = useSelector(({ app }: any) => app.config.category)

    const bounced = (func: any, timer: any) => {
        let timeId: any = null;
        return (...args: any) => {
            if (timeId) {
                clearTimeout(timeId);
            }
            timeId = setTimeout(() => {
                func(...args);
            }, timer);
        };
    };

    const filteredCategory = ((inputValue: string) => {
        const inputValueLowerCase = inputValue.toLowerCase();
        return categoryConfig.filter((item: any) => {
            const lowerCaseString = item.name.toLowerCase();
            return lowerCaseString.indexOf(inputValueLowerCase) > -1;
        })
    })

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
                onChange={(e: any) => onChangeHandler(e)}
                onKeyUp={bounced((e: any) => (console.log(filteredCategory(inputValue))), 1000)} />
            {visibleClear && <button className='category-search-clear' onClick={() => setInputValue('')}><MdClear /></button>}
        </div>
    );
};

export default SearchCategory;