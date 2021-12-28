import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { categoryConfig } from "../../config";

import { AddEditCategory, CategoryItems, PopupHeader } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { removeCategory } from '../../store/actions/app';

import * as utils from "../../utils";


interface IPopupProps {
  showCloseIcon?: any,
  onToggle?: any,
  title: string,
  children?: any,
  className?: string,
  setDeletedItems: React.Dispatch<React.SetStateAction<number[]>>,
  deletedItems: number[]

}

const Popup: React.FC<IPopupProps> = ({ showCloseIcon, onToggle, title, className, deletedItems, setDeletedItems }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [isAdd, setIsAdd] = useState<boolean>(false)
  const [newCategory, setNewCategory] = useState<any>()

  const dispatch = useDispatch()

  const configCategory = useSelector(({ app }: any) => app.config.category)

  const changeConfigHandler = () => {
    console.log('changeConfigHandler');
  }

  // useEffect(() => {
  //   const temp = utils.getCategoryNamesById(deletedItems, categoryConfig)

  //   deletedItems.length > 0 && console.log('toplevel', deletedItems);
  //   setDeletedItems([])
  // }, [isEdit])

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
          configCategory={configCategory}
          setConfig={changeConfigHandler}
          deletedItems={deletedItems}
          setDeletedItems={setDeletedItems}
        />
        <CategoryItems
          categoryObj={configCategory}
          changeConfig={changeConfigHandler}
          isEdit={isEdit}
          className='popup-section-items-wrapper'
          deletedItems={deletedItems}
          setDeletedItems={setDeletedItems}
        />
      </section>
    </section >
  );

  return ReactDOM.createPortal(modalMarkup, document.body);
};
export default Popup;
