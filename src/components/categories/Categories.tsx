import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';

import { CategoryItems, Popup, PopupButton } from '..';

import { CategoryContext } from "../../pages/Main"

import * as utils from "../../utils";

interface ICategoriesProps {
    categoryConfig?: any
}

const Categories: React.FC<ICategoriesProps> = ({ categoryConfig }) => {
    const categoryObj = useSelector(({ app }: any) => app.config.category)
    // const category = utils.jsonParse(localStorage.getItem('categories')) ? utils.jsonParse(localStorage.getItem('categories')) : categoryConfig
    // const categoryObj = useContext(CategoryContext)

    const categoryLength = categoryObj.length

    console.log("categoryLength", categoryLength);

    const [view, setView] = useState<boolean>(false)

    const scrollFun = (event: any) => {
        if (window.scrollY > 100) setView(true)
        if (window.scrollY < 100) setView(false)

    }
    useEffect(() => {
        document.addEventListener('scroll', scrollFun)
    }, [])
    return (
        <>{categoryLength < 10
            ? <CategoryItems category={categoryObj} className={`category-wrapper-copy`} isEdit={false} />
            : <section className="category-wrapper-copy">
                <div className='category-search'>
                    <input className='category-search' type="text" placeholder='Search product' />
                    <button className='category-button'>Search</button>
                </div>
                <PopupButton />
            </section>}
            {
                categoryLength < 10
                    ? <Transition
                        in={view}
                        timeout={1000}>
                        {state => <CategoryItems category={categoryObj} className={`category category-fixed ${state}`} isEdit={false} />}
                    </Transition>
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