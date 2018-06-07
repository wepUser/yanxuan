
import React, {Component}from 'react';
import {BrowserRouter, Route, Redirect,HashRouter} from 'react-router-dom';

import GoodDetail from '../goodDetail/GoodDetail';
import Main from '../main/Main';


class Router extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <HashRouter>
                <React.Fragment>
                    <Route exact  path="/" render={() => <Redirect to="/main/home"/>}/>
                    <Route path="/main" component={Main}/>
                    <Route path="/detail" component={GoodDetail}/>
                </React.Fragment>
            </HashRouter>
        );
    }
}

export default Router
