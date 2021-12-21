import React from 'react';
import { Route as ReactRoute } from 'react-router-dom';

import Main from './pages/Main';
import Test from './pages/Test';


const App: React.FC = () => {
    return (
        <>
            <ReactRoute path="/" component={Main} exact />
            <ReactRoute path="/test" component={Test} exact />
        </>
    );
};

export default App;