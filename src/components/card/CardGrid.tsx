import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Card } from '../../components';

import { categoryConfig } from '../../config';


interface ICardGridProps {
    cardConfig: {
        [name: string]: string | any
    }[]
}

const CardGrid: React.FC<ICardGridProps> = ({ cardConfig }) => {
    const selectedCategory = useSelector(({ app }: any) => app.filter.category)

    const getCategoryNamesById = (arr: any) => {
        return categoryConfig.filter((item: any) => arr.some((id: any) => id === item.id));
    };

    const allCards = cardConfig.map((item: any, key: number) => <Card key={key} cardTitle={item.name} cardCategory={getCategoryNamesById(item.categoryId)} />)
    
    const filteredCards = cardConfig.filter((item: any) => {
        return item.categoryId.some((id: number) => selectedCategory.includes(id))
    }).map((item: any, key: number) => <Card key={key} cardTitle={item.name} cardCategory={getCategoryNamesById(item.categoryId)} />)

    const divisionIntoColumns = (arr: any[]) => {
        const columnsize = Math.ceil(arr.length / 2)
        let result = []
        for (let i = 0; i < Math.ceil(arr.length / columnsize); i++) {
            result[i] = arr.slice((i * columnsize), (i * columnsize) + columnsize);
        }
        return result
    }

    return (
        <>
            {selectedCategory.includes(0) || selectedCategory.length === 0
                ?
                <section className='flex'>
                    <ul className='flex-column'>{divisionIntoColumns(allCards)[0]}</ul>
                    <ul className='flex-column'>{divisionIntoColumns(allCards)[1]}</ul>
                </section>
                : <section className='flex'>
                    <ul className='flex-column'>{divisionIntoColumns(filteredCards)[0]}</ul>
                    <ul className='flex-column'>{divisionIntoColumns(filteredCards)[1]}</ul>
                </section>}
        </>
    );
};

export default CardGrid;