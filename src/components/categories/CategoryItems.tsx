import React, { useContext, useEffect, useState } from 'react';
import { GoCheck, GoX, GoPlus } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';

import { CSSTransition, Transition } from 'react-transition-group';
import { PopupCategoryItem } from '..';

import { CategoryContext } from "../../pages/Main"
import { addNewCategory } from '../../store/actions/app/config/addNewCategory';
import { categoryAllSelected } from '../../store/actions/app/filter/categoryAllSelected';
import { categoryUnselected } from '../../store/actions/app/filter/categoryUnselected';


interface ICategoryItemsProps {
    category: any,
    isEdit: boolean,
    className: string,
    changeConfig?: any
}

const CategoryItems: React.FC<ICategoryItemsProps> = ({ isEdit, className }) => {
    const [isAdd, setIsAdd] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>()

    const dispatch = useDispatch()
    const selectedCards = useSelector(({ app }: any) => app.filter.category)
    const categoryObj = useSelector(({ app }: any) => app.config.category)

    const isSelectedAllCards = selectedCards.length === 0 || selectedCards[0] === 0

    const addNewCategoryHandler = () => {
        inputValue && dispatch(addNewCategory(inputValue))
        // categoryObj.setCategory((prev: any) => [...prev, { id: prev.length + 1, name: inputValue }])
    }

    const onChangeHandler = (e: any) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        isAdd && setIsAdd(false)
    }, [isEdit])

    const selectAllCategoryHandler = () => {
        dispatch(categoryAllSelected())
    }

    const onDelete = (id: any) => {
        const newConfigState = categoryObj.category.filter((item: any) => item.id !== id)
        categoryObj.setCategory(newConfigState)
        console.log('newConfigState', newConfigState);
    };

    return (
        <ul className={className}>
            {!isAdd
                ? <button
                    onClick={() => isEdit
                        ? setIsAdd(!isAdd)
                        : selectAllCategoryHandler()}
                    className={`popup-category-item popup-category-item-all ${isEdit || isSelectedAllCards ? 'background-green' : ''}`}>
                    {isEdit ? <GoPlus /> : "All"}
                </button>
                : <div><input
                    className='popup-add-input'
                    placeholder='Add a new category'
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
                </div>}
            {categoryObj.map((item: any, key: number) => <PopupCategoryItem key={`${key + item.name}`} categoryData={item} isEditable={isEdit} />)}
        </ul >

    );
};

export default CategoryItems;