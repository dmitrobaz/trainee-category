import React from "react";

import { Categories, Header, CardGrid, PopupButton } from '../components';

import { cardConfig, categoryConfig } from "../config/config";

import '../scss/main.scss';

const Main = () => {
    return (
        <>
            <Header />
            <main className="main">
                <section className="main-top">
                    <p className="main-top-title">Name Surname</p>
                    <p className="main-top-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus pariatur aspernatur vitae commodi perferendis explicabo optio!
                    </p>
                </section>
                <PopupButton />
                <Categories categoryConfig={categoryConfig} />
                <CardGrid cardConfig={cardConfig} />
            </main>
        </>
    );
};

export default Main;