import React from 'react';
import { Transition } from 'react-transition-group';
import { CategoryItems, PopupButton } from '../components';

interface ICategoryWrapperProps {
    categoryObj: {
        id: number,
        name: string
    },
    scrollView: boolean,
    isCategoryWithSearch: boolean
}

const CategoryWrapper: React.FC<ICategoryWrapperProps> = ({ categoryObj, scrollView, isCategoryWithSearch }) => {
    return (
        <>
            {isCategoryWithSearch
                // CATEGORY PART WITH SEARCH AND POPUP BUTTON 
                ? <>
                    <Transition
                        in={scrollView}
                        timeout={0}
                    >
                        {state => {
                            return <section className="category category-wrapper-copy">
                                <div className='category-search'>
                                    <input className='category-search' type="text" placeholder='Search product' />
                                    <button className='category-button'>Search</button>
                                </div>
                                <PopupButton />
                            </section>
                        }
                        }
                    </Transition>
                    <Transition
                        in={scrollView}
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
                </>
                // CATEGORY PART WITH CATEGORY ITEMS AND POPUP BUTTON 
                : <>
                    <CategoryItems
                        categoryObj={categoryObj}
                        className={`category category-wrapper-copy`}
                        isEdit={false}
                    />

                    <PopupButton className="button-popup" />

                    <Transition
                        in={scrollView}
                        timeout={0}>
                        {state => <>
                            <CategoryItems
                                categoryObj={categoryObj}
                                className={`category-all-item category-wrapper ${state}`}
                                isEdit={false}
                            />
                            <PopupButton className={`button-popup-fixed ${state}`} /></>
                        }
                    </Transition>
                </>}
        </>
    );
};

export default CategoryWrapper;