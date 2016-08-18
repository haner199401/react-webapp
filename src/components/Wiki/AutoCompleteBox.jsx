/**
 * Created by haner on 16/8/17.
 * AutoCompleteBox
 */

import React, {Component, PropTypes} from 'react';
import AutoComplete from './AutoComplete';

export default class AutoCompleteBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="autocompleteNodes">
                {
                    this.props.data.map(function (item, i) {
                        return <AutoComplete {...item} key={i}/>;
                    })
                }
            </div>
        );
    }
}

AutoCompleteBox.propTypes = {
    data:PropTypes.arrayOf(PropTypes.shape({
        link:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        desc:PropTypes.string.isRequired
    }).isRequired).isRequired
};