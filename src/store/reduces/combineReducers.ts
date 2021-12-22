import { combineReducers } from 'redux';

import { filter } from './app/filter';
import { config } from './app/config';
import { states } from './app/states';



const rootReducer = combineReducers({

    app: combineReducers({
        filter,
        config,
        states
    })
})

export default rootReducer;