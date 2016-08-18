/**
 * Created by haner on 16/6/21.
 */

import React,{Component,PropTypes} from 'react';

export default class TopicRow extends Component {

    render() {
        return (<li>
            <img src={this.props.coverImg} alt=""/>
            <h3>{this.props.title}</h3>
        </li>);
    }
}


TopicRow.propTypes = {

};