import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { categoryConfig } from "../../config";

import { AddEditCategory, CategoryItems, PopupHeader } from '..';

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
  const [config, setConfig] = useState<any>(categoryConfig)
  const [isAdd, setIsAdd] = useState<boolean>(false)
  const [newCategory, setNewCategory] = useState<any>()

  const changeConfigHandler = (newConfig: any) => setConfig(newConfig)



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
          config={config}
          setConfig={changeConfigHandler}
        />

        <CategoryItems
          category={config}
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
