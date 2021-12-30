import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewCategory, interimNewCategory } from '../../store/actions/app';

import { GoCheck, GoX } from 'react-icons/go';
import { MdClear } from 'react-icons/md';

interface IAddNewCategoryProps {
    isAdd: boolean,
    setIsAdd: React.Dispatch<React.SetStateAction<boolean>>
    placeholder?: string,
    setConfig?: any,
    editCategoryItemHandler?: any,
    categoryObj: any
}

const AddNewCategory: React.FC<IAddNewCategoryProps> = ({ placeholder, isAdd, setIsAdd, setConfig, categoryObj }) => {
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState<string>('')
    const [visibleClear, setVisibleClear] = useState<boolean>(false)


    const addNewCategoryHandler = () => {
        if (inputValue !== '') {
            dispatch(interimNewCategory({ id: categoryObj.length + 1, name: inputValue || 'defaultName' }))
            setInputValue('')
        }

    }

    const closeEditCategoryItem = () => {
        setIsAdd(!isAdd)
    }

    const onChangeHandler = (e: any) => {
        setInputValue(e.target.value)
        !visibleClear && setVisibleClear(true)
    }
    
    useEffect(() => {
        inputValue === '' && setVisibleClear(false)
    }, [inputValue])
    return (
        <div className="popup-add-wrapper"><input
            className='popup-add-input'
            placeholder={placeholder ? placeholder : 'Add a new category'}
            type="text"
            value={inputValue}
            onChange={(e: any) => onChangeHandler(e)} />
            {visibleClear && <button className='popup-add-input-clear' onClick={() => setInputValue('')}><MdClear /></button>}
            <button
                className='category-button'
                onClick={() => addNewCategoryHandler()}>
                <GoCheck />
            </button>
            <button
                className='category-button'
                onClick={() => closeEditCategoryItem()}>
                <GoX />
            </button>
        </div>
    );
};

export default AddNewCategory;