/**
 * desc：
 * author：
 * date：
 */
import React, {Component}from 'react';
import BScroll from 'better-scroll'


class Xscroll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const ulDom = this.type.querySelector('ul');
        const parentDom = ulDom.parentNode;

        const parentWidth = parentDom.clientWidth;
        const liItems = Array.from(ulDom.querySelectorAll('li'));
        const lisWidth = liItems.reduce((p, n) => {
            return p + Number(n.clientWidth)
        }, 0);
        ulDom.style.width = `${lisWidth}px`;

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
