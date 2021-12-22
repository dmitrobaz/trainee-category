import React, { useEffect, useState } from 'react';

import Popup from './Popup';

import { CSSTransition } from 'react-transition-group';

interface IPopupButtonProps {
  onShow?: () => void,
  transitionIn?: boolean
}

const PopupButton: React.FC<IPopupButtonProps> = () => {
  const [isOpen, toggleOpen] = useState<boolean>(false);

  const transitionDuration = 500;

  const bodyId = document.getElementById('body')

  useEffect(() => {
    isOpen
      ? bodyId?.classList.add('overflow-x-disable')
      : bodyId?.classList.remove('overflow-x-disable')
  }, [isOpen])
  const popupToggleHandler = () => {
    toggleOpen(!isOpen)
  }
  return (
    <>
      <button className='category-button' type="button" onClick={() => popupToggleHandler()}>
        Popup
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
          onToggle={toggleOpen}
        />
      </CSSTransition>
    </>
  );
};

export default PopupButton;