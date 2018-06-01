/**
 * desc：
 * author：
 * date：
 */
import React, {Component}from 'react';
import './style.less';

class TypeLists extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    static defaultProps = {
        list: ['推荐', '居家', '配件', '服装', '电器', '洗护', '饮食', '婴童', '文艺', '特色区', '火星区']
    };

    handleType(index) {
        this.setState({
            activeIndex: index
        })
    }


    render() {
        return (
            <ul className="scroll-content">
                {this.props.list.map((item, index) => {
                    let itemClass=index===this.state.activeIndex?'item active':'item';
                    return <li key={index} className={itemClass} onClick={this.handleType.bind(this, index)}>{item}</li>
                })}
            </ul>
        );
    }
}

export default TypeLists
