//Import React and ReactDOM libraries
import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from "./util/Yelp";

// App component renders a SearchBar component and a BusinessList component
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			businesses: []
		};

		this.searchYelp = this.searchYelp.bind(this);
	}
	searchYelp(term, location, sortBy) {
		Yelp.search(term, location, sortBy).then((businesses) => {
			this.setState({ businesses: businesses });
		});
	}
	render() {
		return (
			<div className="App">
				<h1>Business Seeking</h1>
				<SearchBar searchYelp={this.searchYelp} />
				{/* add a businesses prop to component */}
				<h4>Developed by Minh Nguyen &#169; 2020.</h4>
				<BusinessList businesses={this.state.businesses} />
			</div>
		);
	}
}

export default App;
