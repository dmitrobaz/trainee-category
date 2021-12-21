import React, { useState } from 'react';
import { Transition } from 'react-transition-group';



const Test = () => {
    const [visible, setVisible] = useState<boolean>(false)
    return (

        <main className="main">
            <button className='category-button' onClick={() => setVisible(!visible)}>Btn</button>
            <div>
                <Transition
                    in={visible}
                    timeout={0}>
                    {state => {
                        return (
                            <div className={`test ${state}`}>
                                {visible
                                    ? <h1 className='test'>Hello</h1>
                                    : <h1 className='test'>Buy</h1>}
                            </div>
                        )
                    }}
                </Transition>
            </div>
        </main>
    );
};

export default Test;