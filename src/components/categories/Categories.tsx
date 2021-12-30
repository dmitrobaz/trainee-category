import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { CategoryItems, PopupButton, SearchCategory } from '..';

const Categories: React.FC = () => {
    const [scrollView, setScrollView] = useState<boolean>(false)

    const categoryObj = useSelector(({ app }: any) => app.config.category)

    const isCategoryWithSearch = categoryObj.length > 10

    const scrollHandler = () => {
        const heightMainTop = document.querySelector<HTMLElement>('.main-top')?.offsetHeight || 100
        window.scrollY > heightMainTop ? setScrollView(true) : setScrollView(false)
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
    }, [])

    return (
        <>
            {isCategoryWithSearch
                // CATEGORY SECTION WITH SEARCH AND POPUP BUTTON 
                ?
                <section className={`category-wrapper${scrollView ? `-entered` : ``}`}>
                    <SearchCategory />
                    <PopupButton />
                </section>
                // CATEGORY SECTION WITH CATEGORY ITEMS AND POPUP BUTTON 
                :
                <section className={`category-wrapper${scrollView ? `-entered` : ``}`}>
                    <CategoryItems
                        categoryObj={categoryObj}
                        className={`category category-wrapper-copy`}
                        isEdit={false}
                    />
                    <PopupButton className="button-popup-test" />
                </section>
            }
        </>
    );
};

export default Categories;