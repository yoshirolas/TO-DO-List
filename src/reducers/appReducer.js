import { combineReducers } from 'redux';
import changeCategoryTree from './changeCategoryTreeReducer';
import changeSearchQuery from './changeSearchQueryReducer';


const appReducer = combineReducers ({
	changeCategoryTree,
	changeSearchQuery,
});

export default appReducer;
