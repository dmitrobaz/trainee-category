import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AddNewCategory, PopupCategoryItem } from '..';

import { GoPlus } from 'react-icons/go';

import { addNewCategory } from '../../store/actions/app/config/addNewCategory';
import { categoryAllSelected } from '../../store/actions/app/filter/categoryAllSelected';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import StackGrid from 'react-stack-grid';

interface ICategoryItemsProps {
    categoryObj: {
        id: number,
        name: string
    }[],
    isEdit: boolean,
    className: string,
    setConfig?: any
}

const CategoryItems: React.FC<ICategoryItemsProps> = ({ isEdit, className, categoryObj, setConfig }) => {
    const [isAdd, setIsAdd] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>()

    const dispatch = useDispatch()

    const selectedCards = useSelector(({ app }: any) => app.filter.category)

    const isSelectedAllCards = selectedCards.length === 0 || selectedCards[0] === 0

    const addNewCategoryHandler = () => {
        inputValue && dispatch(addNewCategory(inputValue))
        // categoryObj.setCategory((prev: any) => [...prev, { id: prev.length + 1, name: inputValue }])
    }

    const onChangeHandler = (e: any) => {
        setInputValue(e.target.value)
    }

    const selectAllCategoryHandler = () => {
        !isSelectedAllCards && dispatch(categoryAllSelected())
    }

    useEffect(() => {
        isAdd && setIsAdd(false)
    }, [isEdit])

    return (
        <ul className={className}>
            {<TransitionGroup component={null}>
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
                        categoryObj={categoryObj}
                    />}

                {categoryObj.map((item: any) => {
                    return (<CSSTransition
                        key={item.id}
                        classNames="category-transition"
                        timeout={200}
                    >
                        <PopupCategoryItem
                            key={item.id}
                            categoryData={item}
                        />
                    </CSSTransition>)
                })}
            </TransitionGroup>}
            {/* {categoryObj.map((item: any, key: number) => {
                return (
                    <PopupCategoryItem
                        key={`${key + item.name}`}
                        categoryData={item}
                    />)
            })} */}
        </ul >

    );
};

export default CategoryItems;