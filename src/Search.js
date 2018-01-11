import React, { Component } from 'react';
/*import './Search.css';*/

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInputValue: '',
			taskList: this.props.entries,
		}

		this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
		this.searchTasks = this.searchTasks.bind(this);
	}

	searchTasks(serchQuery) {
		const categoryFocus = this.props.categoryFocus;
		const taskFilter = this.state.taskList.filter(item => item.parentCategory === categoryFocus);
		let searchedTasks = taskFilter.filter(
			(item => item.taskText.indexOf(serchQuery)!==-1)
		);
		
		this.props.showSearchResult(searchedTasks);
	}

	handleSearchInputChange(event) {
		let serchQuery = event.target.value;
		this.setState({
			searchInputValue: event.target.value,
		});
		this.searchTasks(serchQuery);
	}
	
  render() {
    return (
			<article className="search">
  			<input
	     		type='text'
	     		placeholder='Enter search query'
	     		value={this.state.searchInputValue}
	     		onChange={this.handleSearchInputChange}
			  />	
  		</article>
		);
  }
};

export default Search;
