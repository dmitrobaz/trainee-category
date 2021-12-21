import React, { useContext, useEffect, useState } from 'react';
import { CSSTransition, Transition } from 'react-transition-group';

import { CategoryContext } from "../../pages/Main"


interface ICategoryItemsProps {
    category: any,
    edit: boolean,
    className: string,
    changeConfig?: any
}

const CategoryItems: React.FC<ICategoryItemsProps> = ({ edit, className }) => {
    const categoryObj = useContext(CategoryContext)

    const [isEditName, setIsEditName] = useState<boolean>(false)


    const onDelete = (id: any) => {
        const newConfigState = categoryObj.category.filter((item: any) => item.id !== id)
        categoryObj.setCategory(newConfigState)
        console.log('newConfigState', newConfigState);
    };

    return (
        <ul className={className}>
            {!edit
                ? categoryObj.category.map((item: any, key: number) => <li key={`${key}${item.name}`} className="category-item">{item.name}</li>)
                : categoryObj.category.map((item: any, key: number) => {
                    return <>

                        <div className={`popup-section-items-edit-wrapper`}>
                            <li className="category-item">{item.name}</li>

                            {!isEditName
                                ? <div>
                                    <button className='category-button' onClick={() => onDelete(item.id)}>Delete</button>
                                    <button className='category-button' onClick={() => setIsEditName(!isEditName)}>Edit</button>
                                </div>
                                : <div>
                                    <button className='category-button' onClick={() => setIsEditName(!isEditName)}>Save</button>
                                    <button className='category-button'>Cancel</button>
                                </div>
                            }

                        </div>
                    </>
                })
            }
        </ul >

    );
};

export default CategoryItems;