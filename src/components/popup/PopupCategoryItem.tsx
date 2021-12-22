import React, { useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { categorySelected } from '../../store/actions/app/filter/categorySelected';
import { categoryUnselected } from '../../store/actions/app/filter/categoryUnselected';


interface IPopupCategoryItemProps {
    categoryData: {
        [name: string]: any
    },
    isEditable: boolean
}

const PopupCategoryItem: React.FC<IPopupCategoryItemProps> = ({ categoryData, isEditable }) => {
    const dispatch = useDispatch()

    const [categoryToggle, setCategoryToggle] = useState<boolean>(false)

    const categoryHandler = (id: number) => {
        setCategoryToggle(!categoryToggle)
        !categoryToggle
        ?dispatch(categorySelected(id))
        :dispatch(categoryUnselected(id))
    }

    return (
        <li className="popup-category-item-wrapper">
            <button onClick={() => categoryHandler(categoryData.id)} className={`popup-category-item ${categoryToggle && 'background-green'}`}>{categoryData.name}</button>
            {isEditable
                ? <>
                    <button className="popup-category-item-edit"><BiEdit /></button>
                    <button className="popup-category-item-delete"><AiOutlineCloseSquare /></button>
                </>
                : <></>}
        </li>
    );
};

export default PopupCategoryItem;