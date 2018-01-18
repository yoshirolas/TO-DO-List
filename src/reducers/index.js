// import { combineReducers } from 'redux';
import initialState from '../initState';

function appReducer (state = initialState, action) {
	console.log(state, action);
	switch (action.type) {
		case 'ADD_CATEGORY': 
			return state.categoryList.concat({
				categoryText: "newCategory",
				 key: 0,
				 child: null,
				 clicked: false,
			})
		default:
			return state;
	}
}

export default appReducer;
