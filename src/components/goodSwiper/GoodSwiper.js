/**
 * desc：
 * author：
 * date：
 */
import React, {Component}from 'react';
import Xscroll from '../scrollX/Xscroll';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.less';

class GoodSwiper extends React.Component {
    static contextTypes = {
        store: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.store=null;
    }

    componentWillMount() {
        const { store } = this.context;
        this.store=store;
    }

    handleClick(index) {
        this.store.dispatch({type:'SET_CURRENT_GOOD',good:this.props.goods[index]});
        this.props.history.push('/detail');
    }

    render() {
        const {goods} = this.props;
        return (
            <Xscroll>
                <ul className="good-list">
                    {goods.map((item, index) => {
                        return <li key={index} onClick={() => this.handleClick(index)} className="item">
                            <div className="img-wrapper">
                                <img src={item.img} alt=""/>
                            </div>
                            <div className="content">
                                <p className="name">{item.name}</p>
                                <p className="describe">{item.describe}</p>
                                <p className="price">￥{item.price}</p>
                            </div>
                        </li>
                    })}
                </ul>
            </Xscroll>
        )
    }
}

export default withRouter(GoodSwiper)
