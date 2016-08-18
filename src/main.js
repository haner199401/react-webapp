import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute, useRouterHistory, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'

import configureStore from './store/configureStore';

import App from './containers/App';
import WikiContainer from './containers/WikiContainer';
import HomeContainer from './containers/HomeContainer';
import TopicContainer from './containers/TopicContainer';
import NotFound from './components/NotFound';




const store = configureStore();


const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={TopicContainer}/>
                <Route path="home" component={HomeContainer}/>
                <Route path="wiki" component={WikiContainer}/>
                <Route path="topic" component={TopicContainer}/>
            </Route>
            <Route path="*" component={NotFound} status={404}/>
        </Router>
    </Provider>
), document.getElementById('root'));
