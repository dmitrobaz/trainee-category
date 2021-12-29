import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { CategoryItems, PopupButton, SearchCategory } from '..';

interface ICategoriesProps {
    categoryConfig?: any
}

const Categories: React.FC<ICategoriesProps> = () => {
    const categoryObj = useSelector(({ app }: any) => app.config.category)
    const isPopupOpen = useSelector(({ app }: any) => app.states.popup)

    const [isOnThisPage, setIsOnThisPage] = useState<boolean>(false)
    const [scrollView, setScrollView] = useState<boolean>(false)

    useEffect(() => {
        setIsOnThisPage(!isOnThisPage)
    }, [isPopupOpen])

    // const category = utils.jsonParse(localStorage.getItem('categories')) ? utils.jsonParse(localStorage.getItem('categories')) : categoryConfig

    const isCategoryWithSearch = categoryObj.length > 10

    const scrollFun = () => {
        if (window.matchMedia("(max-width: 568px)").matches) {
            if (window.scrollY > 50) setScrollView(true)
            if (window.scrollY < 100) setScrollView(false)
            return
        } else {
            if (window.scrollY > 140) setScrollView(true)
            if (window.scrollY < 200) setScrollView(false)
            return
        }


    }
    useEffect(() => {
        document.addEventListener('scroll', scrollFun)
    }, [])
    return (
        <>
            {isCategoryWithSearch
                // CATEGORY PART WITH SEARCH AND POPUP BUTTON 
                ?
                <section className={`category-wrapper-test${scrollView ? `-entered` : ``}`}>
                    <SearchCategory />
                    <PopupButton />
                </section>
                // CATEGORY PART WITH CATEGORY ITEMS AND POPUP BUTTON 
                : <>
                    <section id='test' className={`category-wrapper-test${scrollView ? `-entered` : ``}`}>
                        <CategoryItems
                            categoryObj={categoryObj}
                            className={`category category-wrapper-copy`}
                            isEdit={false}
                        />
                        <PopupButton className="button-popup-test" />
                    </section>
                </>}
        </>
    );
};

export default Categories;