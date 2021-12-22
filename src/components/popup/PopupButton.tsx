import React, { useEffect, useState } from 'react';

import Popup from './Popup';

import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '../../store/actions/app';

import { GiHamburgerMenu } from "react-icons/gi"

interface IPopupButtonProps {
  onShow?: () => void,
  transitionIn?: boolean
}

const PopupButton: React.FC<IPopupButtonProps> = () => {
  // const [isOpen, toggleOpen] = useState<boolean>(false);
  const dispatch = useDispatch()
  const isOpen = useSelector(({ app }: any) => app.states.popup)

  const toggleOpenHandler = () => {
    dispatch(togglePopup())
  }
  const transitionDuration = 500;

  const bodyId = document.getElementById('body')

  // useEffect(() => {
  //   isOpen
  //     ? bodyId?.classList.add('overflow-x-disable')
  //     : bodyId?.classList.remove('overflow-x-disable')
  // }, [isOpen])

  return (
    <>
      <button className='category-button' type="button" onClick={() => toggleOpenHandler()}>
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
        />
      </CSSTransition>
    </>
  );
};

export default PopupButton;