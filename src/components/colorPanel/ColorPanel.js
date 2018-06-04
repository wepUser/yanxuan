/**
 * desc：
 * author：
 * date：
 */
import React, {Component}from 'react';
import './style.less';

class ColorPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        const {title,bgImage,textColor,btnColor}=this.props;
        return (
            <div className="color-panel" style={{background:`${bgImage}`}}>
                <div className="content" style={{color:`${textColor}`}}>
                    <p>{title}</p>
                    <div style={{backgroundColor:`${btnColor}`}}>
                        <span style={{color:`${textColor}`}}>查看更多</span>
                        <i className="iconfont icon-arrow-right-copy"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPanel
