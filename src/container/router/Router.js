<<<<<<< HEAD
import React, {Component}from 'react';
import {HashRouter, Route, Redirect,BrowserRouter} from 'react-router-dom';
=======
/**
 * desc：
 * author：
 * date：
 */
import React, {Component}from 'react';
import {HashRouter, Route, Redirect} from 'react-router-dom';
>>>>>>> ff98fdd784b08e607a27c78f8dbd6d12af5486e3

import GoodDetail from '../goodDetail/GoodDetail';
import Main from '../main/Main';


class Router extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
<<<<<<< HEAD
            <BrowserRouter>
=======
            <HashRouter>
>>>>>>> ff98fdd784b08e607a27c78f8dbd6d12af5486e3
                <React.Fragment>
                    <Route exact  path="/" render={() => <Redirect to="/main/home"/>}/>
                    <Route path="/main" component={Main}/>
                    <Route path="/detail" component={GoodDetail}/>
                </React.Fragment>
<<<<<<< HEAD
            </BrowserRouter>
=======
            </HashRouter>
>>>>>>> ff98fdd784b08e607a27c78f8dbd6d12af5486e3
        );
    }
}

export default Router
