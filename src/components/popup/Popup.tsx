import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { categoryConfig } from "../../config";

import { AddEditCategory, CategoryItems, PopupHeader } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { interimDeleteCategory, removeCategory } from '../../store/actions/app';

import * as utils from "../../utils";


interface IPopupProps {
  isPopupOpen: boolean,
  togglePopup: React.Dispatch<React.SetStateAction<boolean>>,
  title: string,
  className?: string

}

const Popup: React.FC<IPopupProps> = ({ isPopupOpen, togglePopup, title, className }) => {
  const configCategory = useSelector(({ app }: any) => app.config.category)
  const isEdit = useSelector(({ app }: any) => app.states.isEditCategory)
  const deletedItems = useSelector(({ app }: any) => app.interim.deleteItems)

  const [isAdd, setIsAdd] = useState<boolean>(false)
  const [newCategory, setNewCategory] = useState<any>()
  const [config, setConfig] = useState<any>(configCategory)


  const dispatch = useDispatch()

  const setDeletedItems = () => {
    dispatch(interimDeleteCategory([1]))
  }


  const changeConfigHandler = () => {
    console.log('changeConfigHandler');
  }
  useEffect(() => {
    const temp = utils.categoryFilter(configCategory, deletedItems)

    deletedItems.length > 0 && setConfig(temp)
    // setDeletedItems([])
    // setConfig()
  }, [deletedItems])
  // useEffect(() => {
  //   const temp = utils.getCategoryNamesById(deletedItems, categoryConfig)

  //   deletedItems.length > 0 && console.log('toplevel', deletedItems);
  //   setDeletedItems([])
  // }, [isEdit])

  const modalMarkup = (
    <section className={`${className} popup-wrapper ${isPopupOpen && 'overflow-x-enable'}`}>
      <PopupHeader
        togglePopup={togglePopup}
        titleHeaderPopup={title}
        isPopupOpen={isPopupOpen}
      />
      <section className='popup-section'>
        <AddEditCategory
          newCategory={newCategory}
          setNewCategory={setNewCategory}
          configCategory={configCategory}
          setConfig={changeConfigHandler}
          deletedItems={deletedItems}
          setDeletedItems={setDeletedItems}
        />
        <CategoryItems
          categoryObj={config}
          setConfig={setConfig}
          isEdit={isEdit}
          className='popup-section-items-wrapper'
        />
      </section>
    </section >
  );

  return ReactDOM.createPortal(modalMarkup, document.body);
};
export default Popup;
