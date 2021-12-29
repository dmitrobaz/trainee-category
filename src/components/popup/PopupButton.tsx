import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Popup from './Popup';

import { interimClearCategory, removeCategory, togglePopup } from '../../store/actions/app';

import { GiHamburgerMenu } from "react-icons/gi"

interface IPopupButtonProps {
  className?: string
}

const PopupButton: React.FC<IPopupButtonProps> = ({ className }) => {
  const dispatch = useDispatch()

  const isOpen = useSelector(({ app }: any) => app.states.isPopupOpen)
  const deletedItems = useSelector(({ app }: any) => app.interim.deleteItems)

  useEffect(() => {
    if (isOpen) {
      document.getElementById('body')?.classList.add('overflow-x-disable')
      return
    } else {
      document.getElementById('body')?.classList.remove('overflow-x-disable')
      setTimeout(() => {
        if (deletedItems.length > 0) {
          deletedItems.forEach((id: number) => {
            return dispatch(removeCategory(id))
          })
          dispatch(interimClearCategory())
        }
      }, 500)
    }
  }, [isOpen])

  return (
    <>
      <button className={`category-button ${className && className}`} type="button" onClick={() => dispatch(togglePopup())}>
        <GiHamburgerMenu />
      </button>
      <CSSTransition
        in={isOpen}
        className="modal-transition"
        classNames="modal-transition"
        unmountOnExit
        timeout={500}>
        <Popup
          title="Filters"
        />
      </CSSTransition>
    </>
  );
};

export default PopupButton;