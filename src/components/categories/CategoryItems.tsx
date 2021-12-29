import React, { useContext, useEffect, useState } from 'react';
import { GoCheck, GoX, GoPlus } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';

import { AddNewCategory, PopupCategoryItem } from '..';

import { addNewCategory } from '../../store/actions/app/config/addNewCategory';
import { categoryAllSelected } from '../../store/actions/app/filter/categoryAllSelected';


interface ICategoryItemsProps {
    categoryObj: {
        id: number,
        name: string
    }[],
    isEdit: boolean,
    className: string,
    setConfig?: any,
    setDeletedItems?: any,
    deletedItems?: any
}

const CategoryItems: React.FC<ICategoryItemsProps> = ({ isEdit, className, deletedItems, setDeletedItems, categoryObj,setConfig }) => {
    const [isAdd, setIsAdd] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>()
    

    const dispatch = useDispatch()
    const selectedCards = useSelector(({ app }: any) => app.filter.category)
    // const categoryObj = useSelector(({ app }: any) => app.config.category)


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

    // const onDelete = (id: any) => {
    //     const newConfigState = categoryObj.category.filter((item: any) => item.id !== id)
    //     categoryObj.setCategory(newConfigState)
    //     console.log('newConfigState', newConfigState);
    // };

    return (
        <ul className={className}>
            {!isAdd
                ? <button
                    onClick={() => isEdit
                        ? setIsAdd(!isAdd)
                        : selectAllCategoryHandler()}
                    className={`popup-category-item popup-category-item-all ${isEdit || isSelectedAllCards ? 'background-green' : ''} `}>
                    {isEdit ? <GoPlus /> : "All"}
                </button>
                : <AddNewCategory
                    isAdd={isAdd}
                    setIsAdd={setIsAdd}
                    setConfig={setConfig}
                />}
            {categoryObj.map((item: any, key: number) => <PopupCategoryItem
                key={`${key + item.name}`}
                categoryData={item}
                isEdit={isEdit}
                deletedItems={deletedItems}
                setDeletedItems={setDeletedItems} />)}
        </ul >

    );
};

export default CategoryItems;