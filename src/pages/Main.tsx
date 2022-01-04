import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Categories, Header, CardColumns, MainDescription } from '../components';

import { setDefaultCategory } from "../store/actions/app/config/setDefaultCategory";

import '../scss/main.scss';

export interface iCategoryContext {
    category: any;
    setCategory: React.Dispatch<React.SetStateAction<any>>;
}

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setDefaultCategory())
    }, [])

    return (
        <>
            <Header />
            <main className="main">
                <MainDescription />
                <Categories />
                <CardColumns />
            </main>
        </>
    );
};

export default Main;