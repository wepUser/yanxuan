/**
 * desc：
 * author：
 * date：
 */
import React, {Component}from 'react';
import wei from '../../../static/image/weixin.jpg';
import './style.less'

class Author extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
                <header className="author-header"></header>
                <section className="author-wrapper">
                    <img src={wei} alt=""/>
                    <p>技术交流，请扫描二维码加好友</p>
                </section>
                <footer className="author-footer">
                    https://github.com/wepUser/yanxuan.git
                </footer>
            </div>
        );
    }
}

export default Author
