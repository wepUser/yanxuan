/**
 * desc：
 * author：
 * date：
 */
import React, {Component}from 'react';
import PropTypes from 'prop-types';

import './style.less';

class ShopCar extends React.Component {
    static contextTypes = {
        store: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            num:0
        };
        this.store=null;

    }

    componentWillMount(){
        // const {store}=this.context;
        // this.store=store;
        // let num=this.store.getState().shopCarReducer.reduce((total,good)=>{
        //     return total+good.num
        // },0);
        // this.store.subscribe(()=>{
        //     this.setState({
        //         num:num
        //     })
        // })
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }
    // handleShopCar(){
    //     console.log(1);
    //
    // }

    render() {
        return (
            <div className="shopCar">
                <i className="iconfont icon-gouwuche"></i>
                <span className="shopCar_num" style={{transform:`translateX()`}}>{this.state.num}</span>
            </div>
        );
    }

    componentWillUnmount() {

    }
}

export default ShopCar
