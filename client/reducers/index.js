//Root reducer - each default state has to have a reducer and then each reducer has to be
//put together as one big, overall root reducer

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
    posts,
    comments,
    routing: routerReducer
})

export default rootReducer;
