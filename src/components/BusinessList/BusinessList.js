import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';
import { Yelp } from '../../util/Yelp.js';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.list.map((business) => {
                        return <Business key={business.id} business={business} />;
                    })
                }
            </div>
        )
    }
}

export default BusinessList;