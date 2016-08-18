import React, { Component } from 'react';
import { Link } from 'react-router';
import '../stylesheet/index.scss';

export default class App extends Component {
  render() {
    return (<div className="container">
      <div className="view">
        {this.props.children}
      </div>

      <nav className="tabbar tabbar-bonday">
        <Link className="tabbar-item" to="/home" activeClassName="active">
          <span className="tabbar-label">主页</span>
        </Link>
        <Link className="tabbar-item" to="/topic" activeClassName="active">
          <span className="tabbar-label">话题</span>
        </Link>
        <Link className="tabbar-item" to="/wiki" activeClassName="active">
          <span className="tabbar-label">Wiki</span>
        </Link>
      </nav>
    </div>);
  }
}