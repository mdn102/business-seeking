import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

// A BusinessList component that simulates a list of single businesses
class BusinessList extends React.Component {
	render() {
		return (
			<div className="BusinessList">
				{/* build functionality for the component: iterate through the array and return Business components */}
				{this.props.businesses.map((business) => {
					// callback function returns Business component
					return <Business key={business.id} business={business} />;
				})}
			</div>
		);
	}
}

export default BusinessList;
