import React from 'react';
import { useSelector } from 'react-redux';

import { AllCards, FilteredCards } from '..';

const CardGrid: React.FC = () => {
    const selectedCategory = useSelector(({ app }: any) => app.filter.category)

    return (
        <>
            {selectedCategory.includes(0) || selectedCategory.length === 0
                ? <AllCards />
                : <FilteredCards />
            }
        </>
    );
};

export default CardGrid;