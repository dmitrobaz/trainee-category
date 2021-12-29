import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AddEditCategory, CategoryItems, PopupHeader } from '..';

import { interimClearCategory, togglePopup } from '../../store/actions/app';

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
  const deletedItems = useSelector(({ app }: any) => app.interim.deleteItems)

  const [config, setConfig] = useState<any>(configCategory)

  const togglePopupHandler = () => {
    dispatch(togglePopup())
  }

  useEffect(() => {
    const temp = deletedItems.length > 0 && utils.categoryFilter(configCategory, deletedItems)
    deletedItems.length > 0 && setConfig(temp)
  }, [deletedItems])

  useEffect(() => {
    if (!isSaveCategory) {
      setConfig(categoryConfig)
      dispatch(interimClearCategory())
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
