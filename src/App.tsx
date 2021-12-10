import React from 'react';
import { Route as ReactRoute } from 'react-router-dom';

import Main from './pages/Main';

const App: React.FC = () => {
    return (
        <ReactRoute path="/" component={Main} exact />
    );
};

export default App;