/**
 * Created by haner on 16/8/17.
 */

import * as types from '../constants/ActionTypes';

const initialState = {
    isFetching: false,
    keyWord:'',
    data:[]
};


export default function (state = initialState, action) {

    switch (action.type){
        case types.RECEIVE_WIKI_DATA:
            return Object.assign({},initialState,{
                data:action.data
            });

        case types.REQUEST_WIKI_DATA:
            return Object.assign({},state,{
                isFetching:!0
            });

        default:
            return state;
    }
}