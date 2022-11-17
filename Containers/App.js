import React, { Component } from "react";
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import '../Containers/App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			//robots: robots, (static from file in folder)
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => response.json() )
		.then( users => this.setState({robots: users}) );
	}

	onSearchChange = (event) => {
		// this returns the value of the targeted event.
		this.setState({ searchfield: event.target.value })
	}


	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.robots.length === 0) {
			return <h1> Loading </h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox SearchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>	
			);
		}
	}
}

export default App;