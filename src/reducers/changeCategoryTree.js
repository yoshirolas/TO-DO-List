// import { combineReducers } from 'redux';
import initialState from '../initState';


let uniqueCategoryId = 2;  

function changeCategoryTree (state = initialState.categoryList, action) {
	console.log(action)
	switch (action.type) {
		case 'ADD_CATEGORY': 
			uniqueCategoryId++;
			return state.concat({
				categoryName: action.title,
				categoryId: uniqueCategoryId,
				child: null,
				clicked: false,
			});

		case 'DEL_CATEGORY':
			return state.filter(item => item.categoryId !== action.id);

		case 'RENAME_CATEGORY': 
			let stateCopy = state.slice();
			let categoryItem = stateCopy.find(item => item.categoryId === action.id);
			categoryItem.categoryName = action.title;
			let categoryItemPosition = stateCopy.findIndex(item => item.categoryId === action.id);
			stateCopy.splice(categoryItemPosition, 1, categoryItem);
			return stateCopy;

		default:
			return state;
	}
}

export default changeCategoryTree;
