import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { GoCheck, GoX } from 'react-icons/go';
import { RiCloseCircleFill, RiEditBoxFill } from 'react-icons/ri';

import { AddNewCategory, RenameCategory } from '..';

import { interimDeleteCategory, categorySelected, categoryUnselected, toggleRenameCategory } from '../../store/actions/app';
import CategoryButton from '../categories/CategoryButton';

interface IPopupCategoryItemProps {
    categoryData: {
        [name: string]: any
    }
}

const PopupCategoryItem: React.FC<IPopupCategoryItemProps> = ({ categoryData }) => {
    const dispatch = useDispatch()

    const selectedCards = useSelector(({ app }: any) => app.filter.category)
    const isEdit = useSelector(({ app }: any) => app.states.isEditCategory)
    const isRenameCategory = useSelector(({ app }: any) => app.states.isRenameCategory)

    const configCategory = useSelector(({ app }: any) => app.config.category)



    const [tempCategoryData, setTempCategoryData] = useState<any>(categoryData)
    const [isVisibleBtn, setIsVisibleBtn] = useState<boolean>(true)
    const [isEditCategoryItem, setIsEditCategoryItem] = useState<boolean>(false)
    const [categoryToggle, setCategoryToggle] = useState<boolean>(selectedCards.includes(categoryData.id))

    const categoryHandler = (id: number) => {
        !isEdit && setCategoryToggle(!categoryToggle)
        !categoryToggle && !isEdit
            ? dispatch(categorySelected(id))
            : dispatch(categoryUnselected(id))
    }

    const onDeleteCategory = () => {
        // dispatch(removeCategory(categoryData.id))
        setCategoryToggle(!categoryToggle)
        dispatch(interimDeleteCategory(categoryData.id))
        // setDeletedItems((prev: any) => [...prev, categoryData.id])
    }

    const editCategoryItemHandler = () => {
        setIsEditCategoryItem(!isEditCategoryItem)
        dispatch(toggleRenameCategory())
        setIsVisibleBtn(!isVisibleBtn)

    }
    // =========================
    const [inputValue, setInputValue] = useState<string>()


    const addNewCategoryHandler = () => {
        // inputValue && dispatch(addNewCategory(inputValue))
        // console.log('add', inputValue);
        // setConfig((prev: any) => [...prev, { id: prev.length + 1, name: inputValue }])
        // categoryObj.setCategory((prev: any) => [...prev, { id: prev.length + 1, name: inputValue }])
    }

    const closeEditCategoryItem = () => {

        setIsEditCategoryItem(!isEditCategoryItem)
        setIsVisibleBtn(!isVisibleBtn)

    }

    const onChangeHandler = (e: any) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        setCategoryToggle(selectedCards.includes(categoryData.id))
    }, [selectedCards.includes(categoryData.id)])

    return (
        <li className={!isEditCategoryItem ? "popup-category-item-wrapper" : ''}>

            {!isEditCategoryItem
                ? <CategoryButton
                    isEdit={isEdit}
                    categoryHandler={categoryHandler}
                    categoryData={categoryData}
                    categoryToggle={categoryToggle}
                    tempCategoryData={tempCategoryData}
                />
                : <RenameCategory
                    placeholder={categoryData.name}
                    isEditCategoryItem={isEditCategoryItem}
                    setIsEditCategoryItem={setIsEditCategoryItem}
                    isVisibleBtn={isVisibleBtn}
                    setIsVisibleBtn={setIsVisibleBtn}
                    setTempCategoryData={setTempCategoryData}
                    tempCategoryData={tempCategoryData}
                />}
            {isEdit && isVisibleBtn
                ? <>
                    <button
                        onClick={() => editCategoryItemHandler()}
                        className="popup-category-item-edit">
                        <RiEditBoxFill className='icon edit-icon' />
                    </button>
                    <button
                        onClick={onDeleteCategory}
                        className="popup-category-item-delete">
                        <RiCloseCircleFill className='icon delete-icon' />
                    </button>
                </>
                : <></>}
        </li>
    );
};

export default PopupCategoryItem;