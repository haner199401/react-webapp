/**
 * Created by haner on 16/6/21.
 */

import React,{Component,PropTypes} from 'react';

export default class TopicList extends Component {

    render() {

        return (
            <ul>
                {this.props.data.map(function(item,key){
                    return <HomeRow key={key} {...item}/>
                })}
            </ul>
        );
    }
}


TopicList.propTypes = {

};



