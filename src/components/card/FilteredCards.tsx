import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '..';
import { cardConfig, categoryConfig } from '../../config';
import * as utils from '../../utils';

const FilteredCards = () => {
    const selectedCategory = useSelector(({ app }: any) => app.filter.category)

    // const filteredCards = cardConfig.filter((item: any) => {
    //     return item.categoryId.some((id: number) => selectedCategory.includes(id))
    // }).map((item: any, key: number) => <Card key={key} cardTitle={item.name} cardCategory={getCategoryNamesById(item.categoryId)} />)

    const filteredCards = cardConfig.filter((item: any) => {
        return item.categoryId.some((id: number) => selectedCategory.includes(id))
    }).map((item: any, key: number) => {
        return <Card
            key={key}
            cardTitle={item.name}
            cardCategory={utils.getCategoryNamesById(item.categoryId, categoryConfig)}
        />
    })


    return (
        <section className='card-column-wrapper'>
            <ul className='card-column'>{utils.divisionIntoColumns(filteredCards)[0]}</ul>
            <ul className='card-column'>{utils.divisionIntoColumns(filteredCards)[1]}</ul>
        </section>
    );
};

export default FilteredCards;