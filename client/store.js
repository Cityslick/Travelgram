//import to connect react to redux
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

//app data
import comments from './data/comments';
import posts from './data/posts';

//create an object for the default app data
const defaultState = {
    posts,
    comments
};

//create variables and export default store - like an empty db 
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;