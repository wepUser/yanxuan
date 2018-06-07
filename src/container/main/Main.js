import React, {Component}from 'react';
import {NavLink, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.less';

import Home from './home/Home';
import ShopChart from './shopChart/ShopChart';
import Author from './author/Author';
import ShopCar from '../../components/shopCar/ShopCar';


class Main extends React.Component {
    static contextTypes = {
        store: PropTypes.object
    };
    constructor(props) {
        super(props);
        this.state = {};
        this.store=null;
    }

    componentWillMount(){
        const {store} = this.context;
        this.store=store;
    }

    componentDidMount(){
        this._getCarNum();
    }

    _getCarNum(){
        let num=this.store.getState().shopCarReducer.reduce((total,good)=>{
            return total+good.num
        },0);

        this.iconRef.setState({
            num:num
        })
    }

    render() {
        return (
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
                        {/*<i className="iconfont icon-gouwuche"></i>*/}
                        <ShopCar ref={(ref)=>this.iconRef=ref}/>
                        <span>购物车</span>
                    </NavLink>
                    <NavLink exact to="/main/author" activeClassName="active" className="app-nav-link">
                        <i className="iconfont icon-touxiang"></i>
                        <span>作者</span>
                    </NavLink>
                </nav>
            </div>
        );
    }
}

export default Main
