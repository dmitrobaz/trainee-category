import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewCategory } from '../../store/actions/app';

import { GoCheck, GoX } from 'react-icons/go';

interface IAddNewCategoryProps {
    isAdd: boolean,
    setIsAdd: React.Dispatch<React.SetStateAction<boolean>>
    placeholder?: string,
    setConfig?: any
}

const AddNewCategory: React.FC<IAddNewCategoryProps> = ({ placeholder, isAdd, setIsAdd, setConfig }) => {
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState<string>()


    const addNewCategoryHandler = () => {
        // inputValue && dispatch(addNewCategory(inputValue))
        // console.log('add', inputValue);
        setConfig((prev: any) => [...prev, { id: prev.length + 1, name: inputValue }])
        // categoryObj.setCategory((prev: any) => [...prev, { id: prev.length + 1, name: inputValue }])
    }

    const onChangeHandler = (e: any) => {
        setInputValue(e.target.value)
    }
    return (
        <div><input
            className='popup-add-input'
            placeholder={placeholder ? placeholder : 'Add a new category'}
            type="text"
            value={inputValue}
            onChange={(e: any) => onChangeHandler(e)} />
            <button
                className='category-button'
                onClick={() => addNewCategoryHandler()}>
                <GoCheck />
            </button>
            <button
                className='category-button'
                onClick={() => setIsAdd(!isAdd)}>
                <GoX />
            </button>
        </div>
    );
};

export default AddNewCategory;