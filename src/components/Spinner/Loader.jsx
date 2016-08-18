/**
 * Created by haner on 16/8/18.
 */

import React, { Component } from 'react';

import './style/index.scss';

export default class Loader extends React.Component {

    render() {

        return (<div>
            <div className="loading loading-bonday">
                <div className="loading-bounce1"></div>
                <div className="loading-bounce2"></div>
                <div className="loading-bounce3"></div>
            </div>
        </div>);
    }
}