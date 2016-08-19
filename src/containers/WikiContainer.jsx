/**
 * Created by haner on 16/6/21.
 */

import React, {Component, PropTypes} from 'react';
import * as _ from 'lodash';
import Loader from '../components/Spinner/Loader';
import AutoCompleteBox from '../components/Wiki/AutoCompleteBox';
import { connect } from 'react-redux'

import {wikiAction} from '../redux/wiki';

import '../stylesheet/wiki.scss';

class WikiContainer extends Component {

    handleKeyUp(e) {
        e.stopPropagation();
        var k = e.target.value || '';
        this.props.dispatch(wikiAction.fetchWikiData(k));
        return false;
    }

    //渲染完成后
    componentDidMount() {
        this.refs.key.addEventListener('keyup', _.debounce(this.handleKeyUp.bind(this),500),false);
    }

    render() {
        return (
            <div className="wiki">
                <div className="searchInput">
                    <input type="text" placeholder="WIKI搜索" ref="key"/>
                </div>
                <AutoCompleteBox data={this.props.data}/>
                {this.props.isFetching ? <Loader/>: '' }
            </div>
        );
    }
}

WikiContainer.propTypes = {
    isFetching:PropTypes.bool.isRequired,
    data:PropTypes.array.isRequired
};

function stateMapPorp(state) {
    return state.wikiReducer;
}

export default connect(stateMapPorp)(WikiContainer);