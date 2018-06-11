/**
 * desc：
 * author：
 * date：
 */
import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {bullElement} from '../../../static/util/util';
import './style.less';
import defaultImg from './defaultCar.png';
import {addShopCarGood, deleteShopCarGood} from '../../../store/index';

import PolicyList from '../../../components/policyList/PolicyList';

const mapStateToProps = (state) => {
    return {
        goods: state.shopCarReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addShopCarGood,
        deleteShopCarGood
    },dispatch)
};

class ShopChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            select: props.goods.reduce((map, good, index) => {
                map[index] = true;
                return map
            }, {})
        }
    }

    handleSelect(e, index) {
        let checked = e.target.checked;
        let select = this.state.select;
        select[index] = checked;
        this.setState({
            select
        })
    }

    handleSelectAll(e) {
        let checked = e.target.checked;
        let select = this.state.select;
        Object.keys(select).forEach(key => select[key] = checked);
        this.setState({
            select
        })
    }


    handleControl(type,index,e) {
        let {goods,addShopCarGood,deleteShopCarGood} =this.props;
        let currentGood=goods[index];
        switch (type){
            case 'DELETE_GOOD':
                if(currentGood.num<=1){
                    return false
                }
                deleteShopCarGood(currentGood);
                break;
            case 'ADD_GOOD':
                bullElement(e,ReactDOM.findDOMNode(this.inputRef));
                addShopCarGood(currentGood);
                break;
            default:
                return
        }

    }




    pay() {
        alert('下订单了')
    }

    toolTip(price) {
        if (price < 140) {
            return '再购140元包邮'
        } else if (price < 288) {
            return '再购11元包邮'
        } else {
            return '满够包邮正品'
        }
    }


    render() {
        let {goods} = this.props;
        let {select} = this.state;

        let selectGoods = goods.filter(function (good, index) {
            return select[index]
        });

        let tNum = 0;
        let tPrice = 0;
        selectGoods.forEach(function (good, index) {
            tNum += good.num;
            tPrice += good.num * good.price
        });


        let checkAll = Object.keys(select).every(key => select[key]);

        let discountClass = checkAll ? 'placeOrder' : 'disableOrder';

        return (
            <div>
                <header className="shopCar_title">购物车</header>
                <section className="shopCar_term">
                    <PolicyList policyList={['30天无忧退换货', '48小时快速退款', '满88元免邮费啊']}/>
                </section>
                <section className="discount">
                    <span className="price">全场加价购</span><span
                    className="post">{this.toolTip(tPrice)}</span>
                </section>
                <section className="shopCar_content">
                    {goods.length > 0 ? goods.map((good, index) => {
                        return (
                            <div key={index} className="good_item">
                                <div className="radio">
                                    <input type="checkbox" name={good.name} checked={this.state.select[index]}
                                           onChange={e => this.handleSelect(e, index)}/>
                                </div>
                                <div className="good_img">
                                    <img src={good.img} alt=""/>
                                </div>
                                <div className="good_info">
                                    <p className="describe">{good.describe}</p>
                                    <p className="price">￥{good.price}</p>
                                </div>
                                <div className="good_control">
                                    <div>
                                        <input type="button" value="-" className="decrease"
                                               onTouchStart={this.handleControl.bind(this,'DELETE_GOOD',index)}/>
                                        <input type="number"  className="sum" value={good.num} readOnly/>
                                        <input type="button" value="+" className="add"
                                               onTouchStart={this.handleControl.bind(this,'ADD_GOOD',index)}/>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <div className="default_img"><img src={defaultImg} alt=""/><p>再说点什么吧</p></div>}
                </section>
                {
                    goods.length > 0 ?
                        <section className="shopCar_bottom">
                            <div className="selected" ref={(ref)=>this.inputRef=ref}><input type="checkbox" checked={checkAll}
                                                             onChange={e => this.handleSelectAll(e)}/><span>已选({tNum})</span>
                            </div>
                            <div className="priceTotal">￥{tPrice}</div>
                            <div className={discountClass} onTouchStart={e => this.pay()}>下单</div>
                        </section> : null
                }
            </div>
        );
    }

    componentWillUnmount() {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopChart)
