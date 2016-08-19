/**
 * Created by haner on 16/8/19.
 */
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import wikiReducer from './redux/wiki';

export default combineReducers({
    wikiReducer,
    routing:routerReducer
});
