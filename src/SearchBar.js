import React, { Component } from 'react';
import './SearchBar.css';
import { connect } from 'react-redux'
import { filterTaskBySearchQuery, filterTaskByDone } from './actions/appActions';
import { clearSearchQuery } from './actions/appActions';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      searchInputValue: '',
    }
  }

  updateCheck = () => {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
    this.filterDone();
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
      height: 30,
    };

    return (
      <article className="searchBar">
        <div className="searchCheckBox">
          <Checkbox
            checked={this.state.checked}
            onCheck={ this.updateCheck }
          />
        </div>
        <span>
          Show done
        </span>
        <input 
          className="searchInput"
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

export default connect()(SearchBar);