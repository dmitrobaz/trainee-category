import React from 'react';

import { MdKeyboardBackspace } from "react-icons/md"


interface IPopupHeaderProps {
    isPopupOpen: boolean,
    titleHeaderPopup: string,
    togglePopup: React.Dispatch<React.SetStateAction<boolean>>
}

const PopupHeader: React.FC<IPopupHeaderProps> = ({ isPopupOpen, titleHeaderPopup, togglePopup }) => {
    return (
        <header className='popup-header'>
            {/* CLOSE POPUP  */}
            <button className='popup-back' onClick={() => togglePopup(!isPopupOpen)}><MdKeyboardBackspace /></button>
            <h1 className='popup-title'>{titleHeaderPopup}</h1>
        </header>
    );
};

export default PopupHeader;