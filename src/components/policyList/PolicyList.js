/**
 * Created by admin on 2018-6-4.
 */
import React from 'react';
import './style.less';


/*政策列表*/
class PolicyList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {policyList}=this.props;
        return (
                <ul className="policy-list">
                {policyList.map((item,index)=>{
                    return <li key={index}><i className="iconfont icon-jiantou"></i><span>{item}</span></li>
                })}
            </ul>
        )
    }
}

export default  PolicyList;