/**
 * desc：
 * author：
 * date：
 */
import React, {Component}from 'react';
import BScroll from 'better-scroll';
import './style.less';


class Xscroll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const ulDom = this.type.querySelector('ul');
        const parentDom = ulDom.parentNode;

        const minWidth = parentDom.clientWidth;
        const liItems = Array.from(ulDom.querySelectorAll('li'));
        const lisWidth = liItems.reduce((p, n) => {
            return p + Number(n.clientWidth)
        }, 0);
        // ulDom.style.width = `${lisWidth}px`;
// 最小和父元素宽度一样 否则外层写列表样式会出问题
        ulDom.style.width = `${Math.max(minWidth, lisWidth)}px`
        new BScroll(this.type,{
            scrollX:true,
            click:true
        });

    }


    render() {
        return (
            <div className="scroll-wrapper" ref={ref => this.type = ref}>
                {this.props.children}
            </div>
        );
    }
}

export default Xscroll
