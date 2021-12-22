import React, { useEffect, useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { removeCategory } from '../../store/actions/app/config/removeCategory';
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
    const selectedCards = useSelector(({ app }: any) => app.filter.category)

    const [categoryToggle, setCategoryToggle] = useState<boolean>(selectedCards.includes(categoryData.id))

    const categoryHandler = (id: number) => {
        setCategoryToggle(!categoryToggle)
        !categoryToggle
            ? dispatch(categorySelected(id))
            : dispatch(categoryUnselected(id))
    }

    useEffect(() => {
        setCategoryToggle(selectedCards.includes(categoryData.id))
    }, [selectedCards.includes(categoryData.id)])

    const onDeleteCategory = () => {
        dispatch(removeCategory(categoryData.id))
    }
    return (
        <li className="popup-category-item-wrapper">
            <button onClick={() => categoryHandler(categoryData.id)} className={`popup-category-item ${categoryToggle && 'background-green'}`}>{categoryData.name}</button>
            {isEditable
                ? <>
                    <button className="popup-category-item-edit"><BiEdit /></button>
                    <button onClick={onDeleteCategory} className="popup-category-item-delete"><AiOutlineCloseSquare /></button>
                </>
                : <></>}
        </li>
    );
};

export default PopupCategoryItem;