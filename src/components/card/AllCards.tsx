import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Card } from '..';

import { categoryConfig, cardConfig } from '../../config';

import * as utils from '../../utils'

const AllCards = () => {
    const [view, setView] = useState<boolean>(false)

    console.log("card-columns", view);

    const scrollFun = (event: any) => {
        if (window.scrollY > 100) setView(true)
        if (window.scrollY < 150) setView(false)
    }
    useEffect(() => {
        document.addEventListener('scroll', scrollFun)
    }, [])

    const allCards = cardConfig.map((item: any, key: number) => {
        return <Card
            key={key}
            cardTitle={item.name}
            cardCategory={utils.getCategoryNamesById(item.categoryId, categoryConfig)}
        />
    })

    return (
        <>
            <section className={`card-column-wrapper`}>
                <ul className='card-column'>{utils.divisionIntoColumns(allCards)[0]}</ul>
                <ul className='card-column'>{utils.divisionIntoColumns(allCards)[1]}</ul>
            </section>
        </>

    );
};

export default AllCards;