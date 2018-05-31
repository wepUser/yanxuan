/**
 * desc：
 * author：
 * date：
 */
import React, {Component}from 'react';
import {HashRouter, Route, Redirect} from 'react-router-dom';

import Home from './home/Home';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <Route path="/main/home" component={Home}/>
            </div>
        );
    }
}

export default Main
