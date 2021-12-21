import React, { useContext, useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

import { CategoryItems, Popup, PopupButton } from '..';

import { CategoryContext } from "../../pages/Main"

import * as utils from "../../utils";

interface ICategoriesProps {
    categoryConfig?: any
}

const Categories: React.FC<ICategoriesProps> = ({ categoryConfig }) => {
    // const category = utils.jsonParse(localStorage.getItem('categories')) ? utils.jsonParse(localStorage.getItem('categories')) : categoryConfig
    const categoryObj = useContext(CategoryContext)

    const categoryLength = categoryObj.category.length


    const [view, setView] = useState<boolean>(false)

    const scrollFun = (event: any) => {
        if (window.scrollY > 100) setView(true)
        if (window.scrollY < 100) setView(false)

    }
    useEffect(() => {
        document.addEventListener('scroll', scrollFun)
    }, [])
    return (
        <>
            {categoryLength < 10
                ? <CategoryItems category={categoryObj.category} className={view ? 'category category-fixed' : 'category'} edit={false} />
                : <Transition
                    in={view}
                    timeout={0}>
                    {state => {
                        return (<section className={`category-wrapper ${state}`}>
                            <div className='category-search'>
                                <input className='category-search' type="text" placeholder='Search product' />
                                <button className='category-button'>Search</button>
                            </div>
                            <PopupButton />
                        </section>)
                    }}
                </Transition>
            }
        </>
    );
};

export default Categories;