import React from 'react';

interface ICategoryButtonProps {
    isEdit: boolean,
    categoryHandler: any,
    categoryData: any,
    categoryToggle: any,
}

const CategoryButton: React.FC<ICategoryButtonProps> = ({ isEdit, categoryHandler, categoryData, categoryToggle }) => {
    return (
        <button
            onClick={() => !isEdit && categoryHandler(categoryData.id)}
            className={`popup-category-item 
                        ${categoryToggle && !isEdit ? 'background-green' : ''} 
                        ${categoryToggle && isEdit ? 'background-red' : ''}`}
        >{categoryData.name}
        </button>
    );
};

export default CategoryButton;