import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute, useRouterHistory, browserHistory,Redirect} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'

import App,{WikiContainer,HomeContainer,TopicContainer} from './containers';
import NotFound from './components/NotFound';

import configureStore from './configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={HomeContainer}/>
                <Route path="wiki" component={WikiContainer}/>
                <Route path="topic" component={TopicContainer}/>
            </Route>
            <Route path="*" component={NotFound} status={404}/>
        </Router>
    </Provider>
), document.getElementById('root'));
