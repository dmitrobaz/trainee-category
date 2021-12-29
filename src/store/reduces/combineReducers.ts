import { combineReducers } from 'redux';

import { filter } from './app/filter';
import { config } from './app/config';
import { states } from './app/states';
import { interim } from './app/interim';


const rootReducer = combineReducers({

    app: combineReducers({
        filter,
        config,
        states,
        interim
    })
})

export default rootReducer;