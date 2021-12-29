import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';

import avatar from "../../assets/img/avatar.png"

const Header = () => {
    const [view, setView] = useState<boolean>(false)

    const scrollFun = () => {
        if (window.scrollY > 100) setView(true)
        if (window.scrollY < 150) setView(false)
    }
    useEffect(() => {
        document.addEventListener('scroll', scrollFun)
    }, [])

    return (
        <>
            < header className="header" >
                <p className="header-avatar">
                    <img src={avatar} alt="Avatar img" className="header-avatar-img" />
                </p>
                <section className="header-section">
                    <ul className="header-social">
                        <li><a className="header-social-link" href="https://www.instagram.com/dmitrobaz/"><AiFillInstagram className='nav-icon' /></a></li>
                        <li><a className="header-social-link" href="https://www.facebook.com/profile.php?id=100018147168414"><AiFillFacebook className='nav-icon' /></a></li>
                        <li><a className="header-social-link" href="https://www.linkedin.com/in/dmytro-bas-6aa2a5212/"><AiFillLinkedin className='nav-icon' /></a></li>
                        <li><a className="header-social-link" href="https://github.com/dmitrobaz/"><AiFillGithub className='nav-icon' /></a></li>
                        <li><a className="header-cart" href="#cart"><FaShoppingCart className='nav-icon-cart' /></a></li>
                    </ul>
                    <Transition
                        in={view}
                        timeout={1000}>
                        {state => <p className={`header-title ${state}`}>Name Surname</p>}
                    </Transition>

                </section>
            </header >
        </>
    );
};

export default Header;