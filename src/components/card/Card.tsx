import React from 'react';

import placeholder from "../../assets/img/placeholder.png"


interface ICardProps {
    cardTitle: string,
    cardCategory: any
}

const Card: React.FC<ICardProps> = ({ cardTitle, cardCategory }) => {

    return (
        <li className="card-wrapper">
            <p className="card-avatar">
                <img src={placeholder} alt="" className="card-avatar-img" />
            </p>
            <p className="card-title">{cardTitle}</p>
            <ul className="card-category">
                {cardCategory.map((obj: any) => <li className="card-category-item">{obj.name}</li>)}
            </ul>
        </li>

    );
};

export default Card;