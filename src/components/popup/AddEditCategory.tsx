import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleEditCategory, toggleSaveCategory, addNewCategory } from '../../store/actions/app';

import { AiFillEdit } from 'react-icons/ai';
import { GoCheck, GoX } from 'react-icons/go';


const AddEditCategory: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>()

    const dispatch = useDispatch()

    const isEdit = useSelector(({ app }: any) => app.states.isEditCategory)

    const onChangeHandler = (e: any) => {
        setInputValue(e.target.value)
    }

    const addNewCategoryHandler = () => {
        // categoryObj.setCategory((prev: any) => [...prev, { id: prev.length + 1, name: inputValue }])
        inputValue && dispatch(addNewCategory(inputValue))
    }

    const editToggleHandler = (state: boolean = false) => {
        dispatch(toggleEditCategory())
        dispatch(toggleSaveCategory(state))
    }

    return (
        <section className='category-edit-wrapper'>
            <p className='popup-section-title'>Categories</p>
            <div className='popup-display-flex'>
                {isEdit
                    ? <>
                        <button
                            className='category-button'
                            onClick={() => editToggleHandler(true)}>
                            <GoCheck />
                        </button>
                        <button
                            className='category-button'
                            onClick={() => editToggleHandler(false)}>
                            <GoX />
                        </button>
                    </>
                    :
                    <button
                        className='category-button'
                        onClick={() => editToggleHandler()}>
                        <AiFillEdit />
                    </button>
                }
            </div>
        </section>
    );
};

export default AddEditCategory;