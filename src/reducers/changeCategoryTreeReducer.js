// import { combineReducers } from 'redux';
import initialState from '../initState';


let uniqueCategoryId = 2;  
let uniqueTaskId = 2; 

function changeCategoryTree (state = initialState.categoryList, action) {
	console.log(action)
	switch (action.type) {
		case 'ADD_CATEGORY': { 
			uniqueCategoryId++;
			return state.concat({
				categoryName: action.title,
				categoryId: uniqueCategoryId,
				parentCategoryId: null,
				child: [],
				clicked: false,
				taskList: [],
			});
		}

		case 'ADD_CHILDREN_CATEGORY': {
			console.log(action.id)
			uniqueCategoryId++;
			uniqueTaskId++;
			let stateCopy = state.concat();
			let categoryItem = stateCopy.find(item => item.categoryId === action.id);
			// let parentCategoryPosition = stateCopy.findIndex(item => item.categoryId === action.id);
			// console.log(categoryItem)
			categoryItem.child.push({
				categoryName: action.title, 
				categoryId: uniqueCategoryId,
				parentCategoryId: action.id, 
				child: [],
				clicked: false,
				taskList: [],
			});
			// console.log(categoryItem)
			// let childrenCategoryItem = {
			// 	categoryName: action.title,
			// 	categoryId: uniqueCategoryId,
			// 	child: true,
			// 	clicked: false,
			// 	taskList: [],
			// };
			// stateCopy.splice(parentCategoryPosition + 1, 0, childrenCategoryItem);
			return stateCopy;
		}

		case 'DEL_CATEGORY': {
				console.log('id ' + action.id + 'parent ' + action.parentId)
			if (action.parentId > 0) {
				let stateCopy = state.concat();
				console.log(stateCopy)
				let parentCategoryItem = stateCopy.find(item => item.categoryId = action.parentId);
				console.log(parentCategoryItem)
				let childCategoryItem = parentCategoryItem.child.filter(item => item.categoryId !== action.id)
				parentCategoryItem.child = childCategoryItem;

				return stateCopy
			} else {

				return state.filter(item => item.categoryId !== action.id)
			}
		}

		case 'RENAME_CATEGORY': {
			let stateCopy = state.concat();
			let categoryItem = stateCopy.find(item => item.categoryId === action.id);
			categoryItem.categoryName = action.title;
			let categoryItemPosition = stateCopy.findIndex(item => item.categoryId === action.id);
			stateCopy.splice(categoryItemPosition, 1, categoryItem);
			return stateCopy;
		}

		case 'CLICK_CATEGORY': {
			state.map(item => item.clicked = false);
			let categoryItem = state.find(item => item.categoryId === action.idx);
			categoryItem.clicked = !categoryItem.clicked;
			return state; 
		}

		case 'ADD_TASK': {
			let stateCopy = state.concat();
			if (!stateCopy.find(item => item.clicked === true)) {
				return stateCopy;
			}
			uniqueTaskId++;
			let categoryItem = stateCopy.find(item => item.clicked === true);
			categoryItem.taskList.push( {
				taskName: action.title,
				taskId: uniqueTaskId,
				description: '',
				done: false,
			});
			return stateCopy; 
		}

		case 'SHOW_TASKLIST': {
			let stateCopy = state.concat();
			return stateCopy; 
		}
		
		case 'DONE_TASK': {
			let stateCopy = state.concat();
			let categoryItem = stateCopy.find(item => item.clicked === true);
			let taskItem = categoryItem.taskList.find(item => item.taskId === action.id);
			taskItem.done = !taskItem.done;
		}

		default:
			return state;
	}
}

export default changeCategoryTree;
