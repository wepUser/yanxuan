<<<<<<< HEAD
import React, {Component}from 'react';
import {NavLink, Route} from 'react-router-dom';
import './style.less';

import Home from './home/Home';
import ShopChart from './shopChart/ShopChart';
import Author from './author/Author';
=======
/**
 * desc：
 * author：
 * date：
 */
import React, {Component}from 'react';
import {HashRouter, Route, Redirect} from 'react-router-dom';

import Home from './home/Home';
>>>>>>> ff98fdd784b08e607a27c78f8dbd6d12af5486e3

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
<<<<<<< HEAD
            <div className="main">
                <div className="router-view">
                    <Route exact path="/main/home" component={Home}/>
                    <Route exact path="/main/shopChart" component={ShopChart}/>
                    <Route exact path="/main/author" component={Author}/>
                </div>
                <nav className="app-nav">
                    <NavLink exact to="/main/home" activeClassName="active" className="app-nav-link">
                        <i className="iconfont icon-shouye"></i>
                        <span>首页</span>
                    </NavLink>
                    <NavLink exact to="/main/shopChart" activeClassName='active' className="app-nav-link">
                        <i className="iconfont icon-gouwuche"></i>
                        <span>购物车</span>
                    </NavLink>
                    <NavLink exact to="/main/author" activeClassName="active" className="app-nav-link">
                        <i className="iconfont icon-touxiang"></i>
                        <span>作者</span>
                    </NavLink>
                </nav>
=======
            <div>
                <Route path="/main/home" component={Home}/>
>>>>>>> ff98fdd784b08e607a27c78f8dbd6d12af5486e3
            </div>
        );
    }
}

export default Main
