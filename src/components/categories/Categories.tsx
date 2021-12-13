import React from 'react';

interface ICategoriesProps {
    categoryConfig: Array<number>
}

const Categories: React.FC<ICategoriesProps> = ({ categoryConfig }) => {
    return (
        <ul className="category">
            {categoryConfig.map((category, key: number) => <li key={key} className="category-item">{`Category${category}`}</li>)}
        </ul>
    );
};

export default Categories;