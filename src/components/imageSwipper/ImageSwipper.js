/**
 * Created by admin on 2018-6-4.
 */
import React from 'react';
import ReactSwipe from 'react-swipe';
import './style.less';

class ImageSwipper extends React.Component {
    constructor(prpos, context) {
        super(prpos, context);
        this.state = {
            index: 0
        }
    }

    render() {
        let opt = {
            auto: 2000,
            callback: function (index) {
                this.setState({index: index})
            }.bind(this)
        };

        const {list} = this.props;

        return (
            <div className="swipe-wrapper">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    {list.map((img, index) => {
                        return <img src={img} alt="" key={index}/>
                    })}
                </ReactSwipe>
                <div className="index-container">
                    {list.map((item, index) => {
                        return <span key={index} className={this.state.index === index ? "selected dot" : 'dot'}></span>
                    })}
                </div>
            </div>
        )
    }
}

export default ImageSwipper