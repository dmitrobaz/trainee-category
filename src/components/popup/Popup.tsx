import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { categoryConfig } from "../../config";

import { AddEditCategory, CategoryItems, PopupHeader } from '..';
import { useSelector } from 'react-redux';

interface IPopupProps {
  showCloseIcon?: any,
  onToggle?: any,
  title: string,
  children?: any,
  className?: any,
  open?: any,
}

const Popup: React.FC<IPopupProps> = ({ showCloseIcon, onToggle, title, className }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [isAdd, setIsAdd] = useState<boolean>(false)
  const [newCategory, setNewCategory] = useState<any>()

  const configCategory = useSelector(({ app }: any) => app.config.category)

  const changeConfigHandler = () => {
    console.log('changeConfigHandler');

  }




  const modalMarkup = (
    <section className={`${className} popup-wrapper ${showCloseIcon && 'overflow-x-enable'}`}>
      <PopupHeader
        onClosePopup={onToggle}
        titleHeaderPopup={title}
        showCloseIcon={showCloseIcon}
      />
      <section className='popup-section'>
        <AddEditCategory
          isAdd={isAdd}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          setIsAdd={setIsAdd}
          newCategory={newCategory}
          setNewCategory={setNewCategory}
          config={configCategory}
          setConfig={changeConfigHandler}
        />

        <CategoryItems
          category={configCategory}
          changeConfig={changeConfigHandler}
          isEdit={isEdit}
          className='popup-section-items-wrapper'
        />
      </section>
    </section >
  );

  return ReactDOM.createPortal(modalMarkup, document.body);
};
export default Popup;
