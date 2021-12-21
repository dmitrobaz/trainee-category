import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { categoryConfig } from "../../config";

import { AddEditCategory, CategoryItems, PopupHeader } from '..';

interface IPopupProps {
  showCloseIcon?: any,
  onClose?: any,
  title?: any,
  children?: any,
  className?: any,
  open?: any,
  onSave?: any
}

const Popup: React.FC<IPopupProps> = ({ showCloseIcon, onClose, title, className }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [config, setConfig] = useState<any>(categoryConfig)
  const [isAdd, setIsAdd] = useState<boolean>(false)
  const [newCategory, setNewCategory] = useState<any>()

  const changeConfigHandler = (newConfig: any) => setConfig(newConfig)

  

  const modalMarkup = (
    <section className={`${className} popup-wrapper ${showCloseIcon && 'overflow-x-enable'}`}>
      <PopupHeader
        onClose={onClose}
        title={title}
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
          edit={isEdit}
          className={isEdit
            ? 'popup-section-items-wrapper popup-section-items-edit'
            : 'popup-section-items-wrapper'
          }
        />
      </section>
    </section >
  );

  return ReactDOM.createPortal(modalMarkup, document.body);
};
export default Popup;
