import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {Router, Route, Redirect, IndexRoute, browserHistory  } from 'react-router-dom';

import Store from '../src/store';

import App from './App';
import Login from './login/login';
import Main from './components/main';
import Chat from './components/chat';


ReactDOM.render(
    <Provider store={Store}>
        <Router history={browserHistory}>
            <Redirect from="/index.html" to="/" />
            <Route path="/" component={App}>
                <IndexRoute component={Login} />
                <Route path="login" component={Login} />
                <Route path="signup" component={Login} />
                <Route path="main" component={Chat}>
                    <IndexRoute component={Chat} />
                    <Route path="chat" component={Chat} />
                    <Route path="chat/:type/:id" component={Chat} />
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.querySelector("#app")
);