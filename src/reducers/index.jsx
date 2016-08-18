import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import wiki from './wiki';

const rootReducer = combineReducers({
    wiki,
    routing:routerReducer
});

export default rootReducer;
