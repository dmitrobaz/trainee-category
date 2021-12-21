import React from 'react';

import { MdKeyboardBackspace } from "react-icons/md"


interface IPopupHeaderProps {
    showCloseIcon: boolean,
    title: string,
    onClose: any
}

const PopupHeader: React.FC<IPopupHeaderProps> = ({ showCloseIcon, title, onClose }) => {
    return (
        <header className='popup-header'>
            {/* CLOSE POPUP  */}
            <button className='popup-back' onClick={() => onClose(!showCloseIcon)}><MdKeyboardBackspace /></button>
            <h1 className='popup-title'>{title}</h1>
        </header>
    );
};

export default PopupHeader;