import { combineReducers } from 'redux';

import { filter } from './app/filter';
import { states } from './app/states';
import { users } from './app/users';

import { people } from './request/people';
import { starships } from './request/starships';

const rootReducer = combineReducers({

    app: combineReducers({
        filter
    })
})

export default rootReducer;