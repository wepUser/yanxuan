/**
 * Created by admin on 2018-6-4.
 */
import React from 'react';
import './style.less';

class BrandCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {img,price,brand,isIcon}=this.props;
        return(
            <div className="brand-item">
                <img src={img} alt=""/>
                <div className="brand-content">
                    <p>{brand}制造商</p>
                    <p>{price}元</p>
                    <p><i className={isIcon?'icon-xinpin iconfont':''}></i></p>
                </div>
            </div>
        )
    }
}

export default BrandCard