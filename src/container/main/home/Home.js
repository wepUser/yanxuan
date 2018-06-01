/**
 * desc：
 * author：
 * date：
 */
import React, {Component}from 'react';
import './style.less';
import logo from './img/logo.png';

import Xscroll from '../../../components/scrollX/Xscroll';
import TypeList from '../../../components/typeList/TypeLists';

class Home extends React.Component {

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
            <div className="home">
                <header >
                    <div className="home-header">
                        <div className="fixed-header">
                            <div className="search-bar">
                                <div className="logo">
                                    <img src={logo} alt="logo"/>
                                </div>
                                <div className="search">
                                    <i className="iconfont icon-sousuo"></i>
                                    <input type="text" placeholder="搜索商品"/>
                                </div>
                            </div>
                            <div className="type-scroll">
                                <Xscroll>
                                    <TypeList/>
                                </Xscroll>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        );
    }
}

export default Home
