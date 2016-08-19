/**
 * Created by haner on 16/8/17.
 */

import * as _ from 'lodash';
import * as types from './actionType';
import request from 'superagent';
import jsonp from 'superagent-jsonp';

//请求数据
export function fetchWikiData(keyWord) {
    const wikiUrl = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=";

    return (dispatch)=>{
        //开始请求数据
        dispatch(requestWikiData());

        // 请求数据
        return request.get(wikiUrl + encodeURIComponent(keyWord)).use(jsonp).end((err,res) => {

            if(!res)return;

            let data = _.zipWith(res.body[1],res.body[2],res.body[3],function(title,desc,link){
                return {title:title,desc:desc,link:link}
            });
            //接受数据
            dispatch(getWikiData(data));
        });
    };

}


//开始请求数据
export function requestWikiData() {
    return {type: types.REQUEST_WIKI_DATA};
}


//获取到数据
export function getWikiData(data) {
    return {
        type: types.RECEIVE_WIKI_DATA, data,
    };
}

//是否需要请求数据
export function  ifNeedRequestWifiData() {

}