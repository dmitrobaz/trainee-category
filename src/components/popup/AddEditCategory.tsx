import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AiFillEdit } from 'react-icons/ai';
import { GoCheck, GoX } from 'react-icons/go';

import { addNewCategory } from '../../store/actions/app/config/addNewCategory';
import { toggleEditCategory } from '../../store/actions/app';



interface IAddEditCategoryProps {
    newCategory: any,
    setNewCategory: any,
    configCategory: { id: number, name: string }[],
    setConfig: any
    deletedItems?: any,
    setDeletedItems?: any

}

const AddEditCategory: React.FC<IAddEditCategoryProps> = ({ deletedItems, setDeletedItems, configCategory }) => {
    const [inputValue, setInputValue] = useState<string>()

    const categoryObj = useSelector(({ app }: any) => app.config.category)
    const isEdit = useSelector(({ app }: any) => app.states.isEditCategory)
    const isAdd = useSelector(({ app }: any) => app.states.isAddNewCategory)

    const dispatch = useDispatch()
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



    // useEffect(() => {
    //     localStorage.setItem('category', JSON.stringify(categoryObj.category))
    // }, [categoryObj.category])

    const addNewCategoryHandler = () => {
        // categoryObj.setCategory((prev: any) => [...prev, { id: prev.length + 1, name: inputValue }])
        inputValue && dispatch(addNewCategory(inputValue))
    }

    const editToggleHandler = () => {
        dispatch(toggleEditCategory())
    }

    return (
        <div className='category-edit-wrapper'>
            <p className='popup-section-title'>Categories</p>

            {/* EDIT ENABLE  */}
            <div className='popup-display-flex'>
                {isEdit
                    ?
                    <>
                        <button
                            className='category-button'
                            onClick={() => editToggleHandler()}>
                            <GoCheck />
                        </button>
                        <button
                            className='category-button'
                            onClick={() => editToggleHandler()}>
                            <GoX />
                        </button>
                    </>
                    :
                    <button
                        className='category-button'
                        onClick={() => editToggleHandler()}
                    >
                        <AiFillEdit />
                    </button>
                }
            </div>
        </div>
    );
};

export default AddEditCategory;