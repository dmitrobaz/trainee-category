import React, { useEffect, useMemo, useState } from 'react';

import Popup from './Popup';

import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { removeCategory, togglePopup } from '../../store/actions/app';

import { GiHamburgerMenu } from "react-icons/gi"

interface IPopupButtonProps {
  onShow?: () => void,
  transitionIn?: boolean,
  className?: string
}

const PopupButton: React.FC<IPopupButtonProps> = ({ className }) => {
  // const [isOpen, toggleOpen] = useState<boolean>(false);
  const dispatch = useDispatch()
  const isOpen = useSelector(({ app }: any) => app.states.popup)
  const [deletedItems, setDeletedItems] = useState<number[]>([])

  const toggleOpenHandler = () => {
    dispatch(togglePopup())
  }
  const transitionDuration = 500;

  const bodyId = document.getElementById('body')


  useEffect(() => {
    if (isOpen) {
      bodyId?.classList.add('overflow-x-disable')
      return
    } else {
      bodyId?.classList.remove('overflow-x-disable')
      setTimeout(() => deletedItems.length > 0 && deletedItems.forEach((id: number) => dispatch(removeCategory(id))), 500)
    }
  }, [isOpen])

  return (
    <>
      <button className={`category-button ${className}`} type="button" onClick={() => toggleOpenHandler()}>
        <GiHamburgerMenu />
      </button>
      <CSSTransition
        in={isOpen}
        className="modal-transition"
        classNames="modal-transition"
        unmountOnExit
        timeout={transitionDuration}>
        <Popup
          title="Filters"
          showCloseIcon={isOpen}
          onToggle={toggleOpenHandler}
          deletedItems={deletedItems}
          setDeletedItems={setDeletedItems}
        />
      </CSSTransition>
    </>
  );
};

export default PopupButton;