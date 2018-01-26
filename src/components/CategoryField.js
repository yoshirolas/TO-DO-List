import React, { Component } from 'react';
import './CategoryField.css';
import CategoryTree from '../containers/CategoryTree';
import CategoryInputForm from '../containers/CategoryInputForm';


class CategoryField extends Component {
	
  render() {
    return (
    	<section className="categoryField">
    		<CategoryInputForm />	
    		<CategoryTree />
    	</section>
    );
  }
}

export default CategoryField;