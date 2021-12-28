import React, { useEffect, useState, createContext, useMemo } from "react";

import { Categories, Header, CardColumns } from '../components';

import { cardConfig, categoryConfig } from "../config";

import * as utils from "../utils"

import '../scss/main.scss';
import { useDispatch } from "react-redux";
import { setDefaultCategory } from "../store/actions/app/config/setDefaultCategory";

export interface iCategoryContext {
    category: any;
    setCategory: React.Dispatch<React.SetStateAction<any>>;
}

const Main = () => {
    const categoryLocal = utils.jsonParse(localStorage.getItem('category')) ? utils.jsonParse(localStorage.getItem('category')) : categoryConfig

    const [category, setCategory] = useState<any>(categoryLocal)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setDefaultCategory())
    }, [])

    // useEffect(() => {
    //     console.log('Set category config to local storage')
    //     setCategory(categoryLocal)
    //     if (!categoryLocal) {
    //         localStorage.setItem('category', JSON.stringify(categoryConfig))
    //     }
    // }, [])

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


                <Categories />

                <CardColumns />
            </main>
        </>
    );
};

export default Main;