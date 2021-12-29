import React, { useEffect, useState } from 'react';
import { RiCloseCircleFill, RiEditBoxFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import { AddNewCategory } from '..';

import { interimDeleteCategory, categorySelected, categoryUnselected } from '../../store/actions/app';

interface IPopupCategoryItemProps {
    categoryData: {
        [name: string]: any
    }
}

const PopupCategoryItem: React.FC<IPopupCategoryItemProps> = ({ categoryData }) => {
    const dispatch = useDispatch()

    const selectedCards = useSelector(({ app }: any) => app.filter.category)
    const isEdit = useSelector(({ app }: any) => app.states.isEditCategory)

    const [isAdd, setIsAdd] = useState<boolean>(false)
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
    useEffect(() => {
        setCategoryToggle(selectedCards.includes(categoryData.id))
    }, [selectedCards.includes(categoryData.id)])


    return (
        <li className={!isEditCategoryItem ? "popup-category-item-wrapper" : ''}>
            {!isEditCategoryItem
                ? <button
                    onClick={() => !isEdit && categoryHandler(categoryData.id)}
                    className={`popup-category-item ${categoryToggle && !isEdit ? 'background-green' : ''} ${categoryToggle && isEdit ? 'background-red' : ''}`}
                >{categoryData.name}
                </button>
                : <AddNewCategory
                    placeholder={categoryData.name}
                    isAdd={isAdd}
                    setIsAdd={setIsAdd}
                />}
            {isEdit
                ? <>
                    <button onClick={() => setIsEditCategoryItem(!isEditCategoryItem)} className="popup-category-item-edit"><RiEditBoxFill /></button>
                    <button onClick={onDeleteCategory} className="popup-category-item-delete"><RiCloseCircleFill /></button>
                </>
                : <></>}
        </li>
    );
};

export default PopupCategoryItem;