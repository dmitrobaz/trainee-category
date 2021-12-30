import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GoCheck, GoX } from 'react-icons/go';
import { renameCategory, toggleRenameCategory } from '../../store/actions/app';
import { interimRenamedCategory } from '../../store/actions/app/interim/interimRenamedCategory';

interface IRenameCategoryProps {
    isEditCategoryItem: boolean,
    isVisibleBtn: boolean,
    setIsEditCategoryItem: React.Dispatch<React.SetStateAction<boolean>>,
    setIsVisibleBtn: React.Dispatch<React.SetStateAction<boolean>>,
    setTempCategoryData: React.Dispatch<React.SetStateAction<any>>,
    placeholder?: string,
    setConfig?: any,
    editCategoryItemHandler?: any,
    tempCategoryData: any
}

const RenameCategory: React.FC<IRenameCategoryProps> = ({ placeholder, setIsEditCategoryItem, isEditCategoryItem, setIsVisibleBtn, isVisibleBtn, setTempCategoryData, tempCategoryData }) => {
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState<string>('')

    const isRenameCategory = useSelector(({ app }: any) => app.states.isRenameCategory)
    const isSaveCategory = useSelector(({ app }: any) => app.states.isSaveCategory)



    const RenameCategoryHandler = () => {
        inputValue && setTempCategoryData({ id: tempCategoryData.id, name: inputValue })
        inputValue && dispatch(interimRenamedCategory({ id: tempCategoryData.id, name: inputValue }))
        setIsEditCategoryItem(!isEditCategoryItem)
        setIsVisibleBtn(!isVisibleBtn)
    }

    const closeEditCategoryItem = () => {
        setIsEditCategoryItem(!isEditCategoryItem)
        setIsVisibleBtn(!isVisibleBtn)
        dispatch(toggleRenameCategory())
    }

    const onChangeHandler = (e: any) => {
        setInputValue(e.target.value)
    }

    return (
        <div>
            <input
                className='popup-add-input'
                placeholder={placeholder}
                type="text"
                value={inputValue}
                onChange={(e: any) => onChangeHandler(e)} />
            <button
                className='category-button'
                onClick={() => RenameCategoryHandler()}>
                <GoCheck />
            </button>
            <button
                className='category-button'
                onClick={() => closeEditCategoryItem()}>
                <GoX />
            </button>
        </div>
    );
};

export default RenameCategory;