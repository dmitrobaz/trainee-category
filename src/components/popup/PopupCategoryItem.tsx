import React, { useEffect, useState } from 'react';
import { RiCloseCircleFill, RiEditBoxFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { removeCategory } from '../../store/actions/app/config/removeCategory';
import { categorySelected } from '../../store/actions/app/filter/categorySelected';
import { categoryUnselected } from '../../store/actions/app/filter/categoryUnselected';


interface IPopupCategoryItemProps {
    categoryData: {
        [name: string]: any
    },
    isEdit: boolean,
    setDeletedItems: any,
    deletedItems: number[]
}

const PopupCategoryItem: React.FC<IPopupCategoryItemProps> = ({ categoryData, isEdit, setDeletedItems, deletedItems }) => {

    const dispatch = useDispatch()
    const selectedCards = useSelector(({ app }: any) => app.filter.category)

    const [categoryToggle, setCategoryToggle] = useState<boolean>(selectedCards.includes(categoryData.id))

    const categoryHandler = (id: number) => {
        !isEdit && setCategoryToggle(!categoryToggle)
        !categoryToggle && !isEdit
            ? dispatch(categorySelected(id))
            : dispatch(categoryUnselected(id))
    }

    useEffect(() => {
        setCategoryToggle(selectedCards.includes(categoryData.id))
    }, [selectedCards.includes(categoryData.id)])

    const onDeleteCategory = () => {
        // dispatch(removeCategory(categoryData.id))
        setCategoryToggle(!categoryToggle)
        setDeletedItems((prev: any) => [...prev, categoryData.id])
    }
    return (
        <li className="popup-category-item-wrapper">
            <button
                onClick={() => !isEdit ? categoryHandler(categoryData.id) : onDeleteCategory()}
                className={`popup-category-item ${categoryToggle && !isEdit && 'background-green'} ${categoryToggle && isEdit && 'background-red'}`}
            //  ${deletedItems.length > 0
            //         && deletedItems.includes(categoryData.id)
            //         && 'background-red'}`}
            >{categoryData.name}
            </button>
            {isEdit
                ? <>
                    <button className="popup-category-item-edit"><RiEditBoxFill /></button>
                    <button onClick={onDeleteCategory} className="popup-category-item-delete"><RiCloseCircleFill /></button>
                </>
                : <></>}
        </li>
    );
};

export default PopupCategoryItem;