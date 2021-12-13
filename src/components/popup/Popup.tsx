import React from 'react';
import { CSSTransition } from 'react-transition-group';

interface IPopupProps {
    onShow: () => void
}

const Popup: React.FC<IPopupProps> = ({ onShow }) => {


    return (
        <section className='popup'>
            Hello
            <button onClick={onShow}>Close popup</button>
        </section>
    );
};

export default Popup;