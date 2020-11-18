import React from 'react';
import './SearchBar.css';

// A SearchBar component to search for business
//https://www.yelp.com/developers/documentation/v3/business_search

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			term: "",
			location: "",
			sortBy: "best_match"
		};  //initial state

		this.sortByOptions = {
			'Best Match': 'best_match',
			'Highest Rated': 'rating',
			'Most Reviewed': 'review_count'
		};
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}


	// returns the current CSS class for a sorting option
	//This will conditionally style each sort by option, displaying to the user which sorting option is currently selected
	getSortByClass(sortByOption) {
		if (this.state.sortBy === sortByOption) {
			return 'active'; //add active class
		}
		return "";
	}

	// sets the state of a sorting option
	handleSortByChange(sortByOption) {
		this.setState({
			sortBy: sortByOption
		});
	}

	// triggers event, input element
	handleTermChange(event) {
		this.setState({
			term: event.target.value
		});
	}
	handleLocationChange(event) {
		this.setState({
			location: event.target.value
		});
	}

	handleSearch(event) {
		this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy); //props change the state values
		event.preventDefault();
	}
	// dynamically create the list items needed to display the sort options
	// to help future proof against potential changes to the Yelp API.
	//The method should iterate through the keys and values of the sortByOptions object and return a list item.
	//The list item elements should use the keys as an attribute, and the values as content.
	renderSortByOptions() {
		// To iterate through the object,start by accessing the keys of the sortByOptions object.
		//Call the keys() method on the JavaScript Object library. Pass in sortByOptions as the argument.
		//Now that you have access to the keys, you’ll iterate through them using the map() method.
		return Object.keys(this.sortByOptions).map((sortByOption) => {
			let sortByOptionValue = this.sortByOptions[sortByOption]; //get the value 
			return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}> {sortByOption} </li>;
		});
	}

	// Render the <SearchBar /> Component
	render() {
		return (
			<div className="SearchBar">
				<div className="footer">
					<p>A Yelp's clone, powered by Yelp.</p>
				</div>
				<div className="SearchBar-sort-options">
					<ul>{this.renderSortByOptions()}</ul>
				</div>
				<div className="SearchBar-fields">
					<input placeholder="Search Businesses" onChange={this.handleTermChange} />
					<input placeholder="Where?" onChange={this.handleLocationChange} />
				</div>
				<div className="SearchBar-submit">
					<a href="/" onClick={this.handleSearch}>Search</a>
				</div>
				
			</div>
		);
	}
}

export default SearchBar;
// Added visual feedback for the sorting options at the top of the search bar
// Set the state of sorting options and input elements