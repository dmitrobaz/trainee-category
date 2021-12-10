import React from 'react';
import StackGrid from "react-stack-grid";

import { Card, Header } from '../components';

import { cardConfig, categoryConfig } from "../config/config";

import '../scss/main.scss';

const Main = () => {
    return (
        <>
            <Header />
            <main className="main">

                <section className="main-top">
                    <p className="main-top-title">Name</p>
                    <p className="main-top-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus pariatur aspernatur vitae commodi perferendis explicabo optio!
                    </p>
                </section>

                <ul className="category">
                    {categoryConfig.map((category: number) => <li className="category-item">{`Category${category}`}</li>)}
                </ul>

                <StackGrid columnWidth='50%' itemComponent='li' component='ul' gutterWidth={1} className="card">
                    {cardConfig.map((item: any, index: any) =>
                        <Card key={index} cardTitle={item.name} cardCategory={item.category} />)}
                </StackGrid>

            </main>
        </>
    );
};

export default Main;