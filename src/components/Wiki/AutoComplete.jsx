/**
 * Wiki AutoComplete Component
 * Created by haner on 16/8/17.
 */

import React, {Component, PropTypes} from 'react';

export default class AutoComplete extends Component {

    render() {
        return (
            <div className="item">
                <a target="blank" href={this.props.link}>{this.props.title}</a>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

AutoComplete.propTypes = {
    link:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired
};
