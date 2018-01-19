import { combineReducers } from 'redux';
import changeCategoryTree from './changeCategoryTree';
import delCategory from './delCategoryReducer';


const appReducer = combineReducers ({
	changeCategoryTree,
	delCategory,
});

export default appReducer;
