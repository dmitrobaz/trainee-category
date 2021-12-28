import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';

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
        // <>
        //     {true
        //         // CATEGORY PART WITH SEARCH AND POPUP BUTTON 
        //         ? <>
        //             <Transition
        //                 in={scrollView}
        //                 timeout={0}
        //             >
        //                 {state => {
        //                     return <section className="category category-wrapper-copy">
        //                         <div className='category-search'>
        //                             <input className='category-search' type="text" placeholder='Search product' />
        //                             <button className='category-button'>Search</button>
        //                         </div>
        //                         <PopupButton />
        //                     </section>
        //                 }}
        //             </Transition>

        //             <Transition
        //                 in={scrollView}
        //                 timeout={0}>
        //                 {state => {
        //                     return (<section className={`category-wrapper ${state}`}>
        //                         <div className='category-search'>
        //                             <input className='category-search' type="text" placeholder='Search product' />
        //                             <button className='category-button'>Search</button>
        //                         </div>
        //                         <PopupButton />
        //                     </section>)
        //                 }}
        //             </Transition>
        //         </>
        //         // CATEGORY PART WITH CATEGORY ITEMS AND POPUP BUTTON 
        //         : <>
        //             <CategoryItems
        //                 categoryObj={categoryObj}
        //                 className={`category category-wrapper-copy`}
        //                 isEdit={false}
        //             />

        //             <PopupButton className="button-popup" />

        //             <Transition
        //                 in={scrollView}
        //                 timeout={0}>
        //                 {state => <>
        //                     <CategoryItems
        //                         categoryObj={categoryObj}
        //                         className={`category-all-item category-wrapper ${state}`}
        //                         isEdit={false}
        //                     />
        //                     <PopupButton className={`button-popup-fixed ${state}`} /></>
        //                 }
        //             </Transition>
        //         </>}
        // </>
    );
};

export default Categories;