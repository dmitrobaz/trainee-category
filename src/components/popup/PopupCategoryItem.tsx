import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RenameCategory, CategoryButton } from '..';

import { RiCloseCircleFill, RiEditBoxFill } from 'react-icons/ri';

import { interimDeleteCategory, categorySelected, categoryUnselected, toggleRenameCategory } from '../../store/actions/app';

interface IPopupCategoryItemProps {
    categoryData: {
        [name: string]: any
    }
}

const PopupCategoryItem: React.FC<IPopupCategoryItemProps> = ({ categoryData }) => {
    const dispatch = useDispatch()

    const selectedCards = useSelector(({ app }: any) => app.filter.category)
    const isEdit = useSelector(({ app }: any) => app.states.isEditCategory)

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
        setCategoryToggle(!categoryToggle)
        dispatch(interimDeleteCategory(categoryData.id))
    }

    const editCategoryItemHandler = () => {
        setIsEditCategoryItem(!isEditCategoryItem)
        dispatch(toggleRenameCategory())
        setIsVisibleBtn(!isVisibleBtn)

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