import React, { Component } from 'react';
/*import './Search.css';*/
import { connect } from 'react-redux'
import { filterTaskBySearchQuery, filterTaskByDone } from './actions/appActions';
import { clearSearchQuery } from './actions/appActions';
import RaisedButton from 'material-ui/RaisedButton';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputValue: '',
    }
  }

  handleSearchInputChange = (event) => {
    let serchQuery = event.target.value;
    this.setState({
      searchInputValue: event.target.value,
    });
    this.props.dispatch(filterTaskBySearchQuery(serchQuery));
  }

  filterDone = () => {
    this.props.dispatch(filterTaskByDone());
  }

  clearSearchQuery = () => {
    this.props.dispatch(clearSearchQuery());
    this.setState({
      searchInputValue: '',
    });
  }
  
  render() {
    const style = {
      margin: 5,
      height: 20,
      minWidth: 40,
    };

    return (
      <article className="search">
        <input 
          type="checkbox"
          onChange={ this.filterDone }
        />
        <input
          type='text'
          placeholder='Enter search query'
          value={this.state.searchInputValue}
          onChange={this.handleSearchInputChange}
        />
        <RaisedButton 
          label="clear" 
          type='submit' 
          style={ style } 
          onClick={ this.clearSearchQuery }
        /> 
      </article>
    );
  }
};

function mapStateToProps(state) {
  return {
    categoryList: state
  }
}

export default connect(mapStateToProps)(SearchBar);