/**
 * desc：
 * author：
 * date：
 */
import React, {Component}from 'react';
import {store,goodSum} from '../../store/index';

import './style.less';

class ShopCar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num:goodSum()
        };

    }

    componentDidMount() {
        this.unSubscribe=store.subscribe(()=>{
            this.setState({
                num:goodSum()
            },function () {

            })
        })
    }


    render() {
        return (
            <div className="shopCar">
                <i className="iconfont icon-gouwuche"></i>
                <span className="shopCar_num" style={{transform:`translateX()`,visibility:this.state.num>0?'visible':'hidden'}}>{this.state.num}</span>
            </div>
        );
    }

    componentWillUnmount() {
        this.unSubscribe();
    }
}

export default ShopCar
