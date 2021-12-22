import React, { useContext, useEffect, useState } from 'react';

import { AiFillEdit } from 'react-icons/ai';
import { GoCheck, GoX } from 'react-icons/go';


import { CategoryContext } from "../../pages/Main"


interface IAddEditCategoryProps {
    isEdit: any,
    setIsEdit: any,
    isAdd: any,
    setIsAdd: any,
    newCategory: any,
    setNewCategory: any,
    config: any,
    setConfig: any

}

const AddEditCategory: React.FC<IAddEditCategoryProps> = ({ isEdit, setIsEdit, isAdd, setIsAdd, newCategory, setNewCategory, config, setConfig }) => {
    const [inputValue, setInputValue] = useState<string>()
    const categoryObj = useContext(CategoryContext)
    // console.log("categoryObj.category", categoryObj.category);

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
    // const onChangeHandler = (e: any) => setNewCategory(e.target.value)
    const onChangeHandler = (e: any) => {
        setInputValue(e.target.value)
    }


    useEffect(() => {
        localStorage.setItem('category', JSON.stringify(categoryObj.category))
    }, [categoryObj.category])

    const addNewCategory = () => {
        categoryObj.setCategory((prev: any) => [...prev, { id: prev.length + 1, name: inputValue }])
    }

    return (
        <>
            <div className='category-edit-wrapper'>
                <p className='popup-section-title'>Categories</p>

                {/* EDIT ENABLE  */}
                <div className='popup-display-flex'>
                    <button
                        className='category-button'
                        onClick={() => setIsEdit(!isEdit)}>
                        {!isEdit ? <AiFillEdit /> : <GoCheck />}
                    </button>

                    {isEdit
                        // ADD NEW CATEGORY 
                        ?
                        <button
                            className='category-button'
                            onClick={() => setIsEdit(!isEdit)}>
                            {isAdd ? 'Close' : <GoX />}
                        </button>
                        : ''
                    }
                </div>
            </div>
            {/* INPUT NEW CATEGORY  */}
            {isAdd
                ? <>
                    <input
                        className='category-add'
                        placeholder='Enter a new category'
                        type="text"
                        value={inputValue}
                        onChange={(e: any) => onChangeHandler(e)} />
                    <button
                        className='category-button no-margin'
                        onClick={() => addNewCategory()}>
                        Add
                    </button>
                </> : ''}
        </>
    );
};

export default AddEditCategory;