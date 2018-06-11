/**
 * desc：商品详情页
 */
import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import {store,addShopCarGood} from '../../store/index';
import {withRouter} from 'react-router-dom';
import {isEmpty,bullElement} from '../../static/util/util';
import './style.less';
import PolicyList from '../../components/policyList/PolicyList';
import ShopCar from '../../components/shopCar/ShopCar';

class GoodDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.goods = null;
    }

    componentWillMount() {
        const data = store.getState().goodReducer;
        if(isEmpty(data)){
            this.toHome();
        }
        this.goods=data;
    }


    toHome=()=>this.props.history.push('/main/home');

    toShopCar=(e)=>{
        bullElement(e,ReactDOM.findDOMNode(this.iconRef)).then(()=>{
            store.dispatch(addShopCarGood(this.goods));
            this.props.history.push('/main/shopChart');
        });

    };

    handleShopCar(e){
        bullElement(e,ReactDOM.findDOMNode(this.iconRef)).then(()=>{
            store.dispatch(addShopCarGood(this.goods));
        });
    }

    render() {
        const {img, name, describe, price} = this.goods;
        return (
            <div className="detail">
                <header className="detail_title">
                    <div className="title_fixed">
                        <i className="iconfont icon-shouye2" onClick={this.toHome.bind(this)}></i>
                        <span>网易严选</span>
                        <ShopCar ref={(ref)=>this.iconRef=ref}/>
                    </div>
                </header>
                <section className="detail_content">
                    <div className="good_img">
                        <img src={img} alt=""/>
                    </div>
                    <div className="goods_describe">
                        <aside className="describe_left">
                            <p className="name">{name}</p>
                            <p className="describe">{describe}</p>
                            <p className="price">￥{price}</p>
                        </aside>
                        <aside className="describe_right">
                            <p className="num">195</p>
                            <p className="evaluate">用户好评</p>
                        </aside>
                    </div>
                    <ul className="good_service">
                        <li className="item">1个促销： 买送优惠券</li>
                        <li className="item">积分： 购买最多得15积分</li>
                        <li className="item service">
                            <p className="service_title">服务</p>
                            <div className="service_terms">
                                <PolicyList policyList={['30天无忧退换货', '48小时快速退款', '满88元免邮费啊', '网易自营品牌', '国内部分地区无法配送']}/>
                            </div>
                        </li>
                    </ul>
                </section>
                <footer className="good_foot">
                    <div><i className="iconfont icon-fanhui" onClick={this.toHome.bind(this)}></i></div>
                    <div><span onTouchStart={this.toShopCar.bind(this)}>立即购买</span></div>
                    <div><span onTouchStart={this.handleShopCar.bind(this)}>加入购物车</span></div>
                </footer>
            </div>
        );
    }
}

export default withRouter(GoodDetail)
