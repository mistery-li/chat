import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

import pc from './reducer/pc';

let devToolsEnhancer = null;
if (process.env.NODE_ENV === '') {
    devToolsEnhancer = require('remote-redux-devtools');
}

const reducers = combineReducers({ pc });
let store = null;
if (devToolsEnhancer) {
    store = createStore(reducers, devToolsEnhancer.default({ realtime: true }));
}
else {
    store = createStore(reducers);
}
export default store;