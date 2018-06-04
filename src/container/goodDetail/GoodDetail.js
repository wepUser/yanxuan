/**
 * desc：
 * author：
 * date：
 */
import React, {Component}from 'react';
import PropTypes from 'prop-types';

class GoodDetail extends React.Component {
    static contextTypes = {
        store: PropTypes.object
    };
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const {store}=this.context;
        console.log(store.getState());
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                detail
            </div>
        );
    }
}

export default GoodDetail
