import React, { Component } from 'react';
import CategoryTree from './CategoryTree';
import TaskTree from './TaskTree';
import './InputForm.css';

class InputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			items: [{text: 'CategoryTest', key: 0, child: null, tasks: ['myFirstTask']}],
			id: 0,
		};

		this.addCategory = this.addCategory.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.delCategory = this.delCategory.bind(this);
		this.renameCategory = this.renameCategory.bind(this);
		this.addChildCategory = this.addChildCategory.bind(this);
	}

	addCategory(event) {
		event.preventDefault();
		if (this.CategoryTitle.value !== '') {
			this.state.id++;
			let itemsArray = this.state.items;
			itemsArray.push({
				text: this.CategoryTitle.value,
				key: this.state.id,
				child: null,
			});

			this.setState({
				items: itemsArray,
				value: ''
			});
		}
		console.log(this.state.items);
	}

	delCategory(key) {
  	let filteredItems = this.state.items.filter(item => item.key !== key);

  	this.setState({
			items: filteredItems
		});
  }

  renameCategory(key, newCategoryTitle) {
  	if (newCategoryTitle !== '' && newCategoryTitle) {
	  	let renamedItem = this.state.items.map(function (item) {
		  	if (item.key === key) {
		  			item.text = newCategoryTitle;
		  	}
		  	return item
	  	});

	  	this.setState({
	  		items: renamedItem
	  	});
  	}
  }

  addChildCategory(key, newCategoryTitle) {
  	if (newCategoryTitle !== '' && newCategoryTitle) {
			this.state.id++;

			let itemsArray = this.state.items;
			let posInItemsArray = itemsArray.findIndex((item) => item.key === key);
			posInItemsArray += 1;
			itemsArray.splice(posInItemsArray, 0, {
				text: newCategoryTitle,
				key: this.state.id,
				child: 1,
			});

			this.setState({
				items: itemsArray,
				value: ''
			});
		}
  }

	handleInputChange(event) {
		this.setState({value: event.target.value});
	}

  render() {
    return (
    	<main>
		    <form onSubmit={this.addCategory}> 
		    	<input
		    		id={this.state.id}
		     		type='text'
		     		placeholder='Enter category title'
		     		value={this.state.value}
		     		onChange={this.handleInputChange}
		     		ref={input => this.CategoryTitle = input}
		      />
		    	<button type='submit'>Add</button>
		    </form>
		    <section className="renderingTree">
		    	<article className="categoryTree">
		    		<CategoryTree 
			    		entries={this.state.items} 
			    		deleted={this.delCategory}
			    		rename={this.renameCategory}
			    		addChild={this.addChildCategory}
			    	/>
		    	</article>
		    	<article className="taskTree">
		    		<TaskTree 
			    		entriesTask={this.state.items} 
			    		// deleted={this.delCategory}
			    		// rename={this.renameCategory}
			    		// addChild={this.addChildCategory}
			    	/>
		    	</article>
		    </section>
		  </main>
    );
  }
}

export default InputForm;
