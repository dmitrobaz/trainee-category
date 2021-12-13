import React from 'react';
import StackGrid from 'react-stack-grid';

import { Card } from '../../components';

interface ICardGridProps {
    cardConfig: {
        [name: string]: string | any
    }[]
}

const CardGrid: React.FC<ICardGridProps> = ({ cardConfig }) => {
    return (
        <StackGrid columnWidth='50%' itemComponent='li' component='ul' gutterWidth={1} className="card">
            {cardConfig.map((item, index: any) =>
                <Card key={index} cardTitle={item.name} cardCategory={item.category} />)}
        </StackGrid>
    );
};

export default CardGrid;