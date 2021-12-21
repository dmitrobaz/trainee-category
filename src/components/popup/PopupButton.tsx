import React, { useEffect, useState } from 'react';

import Popup from './Popup';

import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

interface IPopupButtonProps {
  onShow?: () => void,
  transitionIn?: boolean
}

const PopupButton: React.FC<IPopupButtonProps> = () => {
  const transitionDuration = 500;

  const ModalWithTransitionStyles = styled(Popup)`
  &.modal-transition-enter {
    transform: translateX(100%);
  }
  &.modal-transition-enter-active {
    transition: transform ${transitionDuration}ms;
    transform: translateX(0);
  }
  &.modal-transition-exit {
    transform: translateX(0);

  }
  &.modal-transition-exit-active {
    transition: transform ${transitionDuration}ms;
    transform: translateX(100%);
  }
`;
  const [isOpen, toggleOpen] = useState<boolean>(false);

  const bodyId = document.getElementById('body')

  useEffect(() => {
    isOpen ? bodyId?.classList.add('overflow-x-disable') : bodyId?.classList.remove('overflow-x-disable')
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
        <ModalWithTransitionStyles
          title="Filters"
          showCloseIcon={isOpen}
          onClose={toggleOpen}
          onSave={toggleOpen} />
      </CSSTransition>
    </>
  );
};

export default PopupButton;