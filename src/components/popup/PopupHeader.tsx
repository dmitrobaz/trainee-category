import React from 'react';

import { MdKeyboardBackspace } from "react-icons/md"


interface IPopupHeaderProps {
    showCloseIcon: boolean,
    titleHeaderPopup: string,
    onClosePopup: (arg: boolean) => boolean
}

const PopupHeader: React.FC<IPopupHeaderProps> = ({ showCloseIcon, titleHeaderPopup, onClosePopup }) => {
    return (
        <header className='popup-header'>
            {/* CLOSE POPUP  */}
            <button className='popup-back' onClick={() => onClosePopup(!showCloseIcon)}><MdKeyboardBackspace /></button>
            <h1 className='popup-title'>{titleHeaderPopup}</h1>
        </header>
    );
};

export default PopupHeader;