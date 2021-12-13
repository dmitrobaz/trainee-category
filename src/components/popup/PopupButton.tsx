import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import { Popup } from '..';

const PopupButton = () => {
    const [show, setShow] = useState<boolean>(false)

    const rootId: any = document.getElementById('root')
    const onShowPopup = () => {
        setShow(!show)
    }
    return (
        <>
            <button onClick={onShowPopup}>Popup</button>
            {show && createPortal(<Popup onShow={onShowPopup} />, rootId)}

        </>
    );
};

export default PopupButton;