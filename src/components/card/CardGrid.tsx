import React, { useEffect, useState } from 'react';
import StackGrid from 'react-stack-grid';

import { Card } from '../../components';

interface ICardGridProps {
    cardConfig: {
        [name: string]: string | any
    }[]
}

const CardGrid: React.FC<ICardGridProps> = ({ cardConfig }) => {
    const [view, setView] = useState<boolean>(false)

    // const scrollFun = (event: any) => {
    //     if (window.scrollY > 100) setView(true)
    //     if (window.scrollY < 100) setView(false)

    // }
    // useEffect(() => {
    //     document.addEventListener('scroll', scrollFun)
    // }, [])
    return (
        <StackGrid columnWidth='50%' itemComponent='li' component='ul' gutterWidth={1} className={view ? "card card-margint" : 'card'}>
            {cardConfig.map((item, index: any) =>
                <Card key={index} cardTitle={item.name} cardCategory={item.category} />)}
        </StackGrid>
    );
};

export default CardGrid;