import React, { Component } from 'react';
import './SearchBar.css';
import { connect } from 'react-redux'
import { 
  filterTaskBySearchQuery, 
  filterTaskByDone 
} from '../actions/appActions';
import { clearSearchQuery } from '../actions/appActions';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import ContentBackspace from 'material-ui/svg-icons/content/backspace';

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

    return (
      <div className="searchContainer">
        <div className="logos">
        </div>
        <article className="searchBar">
          <div className="searchCheckBox">
            <span>
              Show done
            </span>
            <div>
              <Checkbox
                checked={ this.state.checked }
                onCheck={ this.updateCheck }
              />
            </div>
          </div>
          <input 
            className="searchInput"
            type='text'
            placeholder='Enter search query'
            value={ this.state.searchInputValue }
            onChange={ this.handleSearchInputChange }
          /> 
          <IconButton onClick={ this.clearSearchQuery }>
            <ContentBackspace />
          </IconButton> 
        </article>
      </div>
    );
  }
};

export default connect()(SearchBar);