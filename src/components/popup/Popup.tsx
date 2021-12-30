import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AddEditCategory, CategoryItems, PopupHeader } from '..';

import { interimRemoveDeletedCategory, interimNewCategory, toggleEditCategory, togglePopup, interimRemoveNewCategory, addNewCategory, toggleSaveCategory, renameCategory, interimRemoveRenamedCategory, toggleRenameCategory } from '../../store/actions/app';

import { categoryConfig } from "../../config";

import * as utils from "../../utils";

interface IPopupProps {
  title: string,
  className?: string

}

const Popup: React.FC<IPopupProps> = ({ title, className }) => {
  const dispatch = useDispatch()

  const configCategory = useSelector(({ app }: any) => app.config.category)

  const isEdit = useSelector(({ app }: any) => app.states.isEditCategory)
  const isPopupOpen = useSelector(({ app }: any) => app.states.isPopupOpen)
  const isSaveCategory = useSelector(({ app }: any) => app.states.isSaveCategory)
  const isRenameCategory = useSelector(({ app }: any) => app.states.isRenameCategory)


  const deletedItems = useSelector(({ app }: any) => app.interim.deleteItems)
  const newItems = useSelector(({ app }: any) => app.interim.newItems)
  const renamedItems = useSelector(({ app }: any) => app.interim.renamedItems)


  // inputValue && dispatch(renameCategory({ id: tempCategoryData.id, name: inputValue }))


  const [config, setConfig] = useState<any>(configCategory)

  const togglePopupHandler = () => {
    dispatch(togglePopup())
    isEdit && dispatch(toggleEditCategory())
    isSaveCategory && dispatch(toggleSaveCategory(false))
    isRenameCategory && dispatch(toggleRenameCategory())


  }
  useEffect(() => {
    const tempNewItems = newItems.length > 0 && newItems
    const tempRenameItems = renamedItems.length > 0 && renamedItems

    if (tempNewItems && isSaveCategory) {
      newItems.forEach((newCategoryItem: any) => {
        dispatch(addNewCategory(newCategoryItem.name))
      })
      dispatch(interimRemoveNewCategory())
    }
    if (tempRenameItems && isSaveCategory) {
      tempRenameItems.forEach((renameItem: any) => {
        dispatch(renameCategory({ id: renameItem.id, name: renameItem.name }))
      })
      dispatch(interimRemoveRenamedCategory())
    }
  }, [isSaveCategory])

  useEffect(() => {
    const temp = newItems.length > 0 && config.concat(newItems)

    if (temp) {
      setConfig(temp)
    }
  }, [newItems])

  useEffect(() => {
    const rename = (configCategory: any[], renamedCategory: any[]) => {
      let result: any[] = [];
      for (let i = 0; i < renamedCategory.length; i++) {
        result = configCategory.map((item: any) => (item.id === renamedCategory[i].id ? renamedCategory[i] : item));
        return result;
      }
      return result;
    };

    const temp = renamedItems.length > 0 && rename(config, renamedItems)

    if (temp) {
      setConfig(temp)
    }
  }, [renamedItems])

  useEffect(() => {
    const temp = deletedItems.length > 0 && utils.categoryFilter(configCategory, deletedItems)
    if (temp) {
      setConfig(temp)
    }
  }, [deletedItems])

  useEffect(() => {
    if (!isSaveCategory && deletedItems.length > 0) {
      setConfig(configCategory)
      dispatch(interimRemoveDeletedCategory())
    }
    if (!isSaveCategory && newItems.length > 0) {
      setConfig(configCategory)
      dispatch(interimRemoveNewCategory())
    }
    if (!isSaveCategory && renamedItems.length > 0) {
      console.log('default config', configCategory)
      setConfig(configCategory)
      dispatch(interimRemoveRenamedCategory())
    }
  }, [isEdit])

  const PopupPortal = (
    <section className={`${className} popup-wrapper ${isPopupOpen && 'overflow-x-enable'}`}>
      <PopupHeader
        togglePopup={togglePopupHandler}
        titleHeaderPopup={title}
        isPopupOpen={isPopupOpen}
      />
      <main className='popup-section'>
        <AddEditCategory />
        <CategoryItems
          categoryObj={config}
          setConfig={setConfig}
          isEdit={isEdit}
          className='popup-section-items-wrapper'
        />
      </main>
    </section >
  );

  return ReactDOM.createPortal(PopupPortal, document.body);
};
export default Popup;
