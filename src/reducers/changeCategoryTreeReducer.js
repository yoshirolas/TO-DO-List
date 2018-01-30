import defaultDataStructure from '../constants/defaultDataStructure';
import undoable, { includeAction } from 'redux-undo'

const initState = defaultDataStructure;
let uniqueCategoryId = 2;  
let uniqueTaskId = 2; 

function changeCategoryTree (state = initState.categoryList, action) {
	switch (action.type) {

		case 'ADD_CATEGORY': { 
			uniqueCategoryId++;

			return state.concat({
				categoryName: action.title,
				categoryId: uniqueCategoryId,
				parentCategoryId: null,
				child: [],
				clicked: false,
				searchQuery: '',
				taskList: [],
			});
		}

		case 'ADD_CHILDREN_CATEGORY': {
			uniqueCategoryId++;
			uniqueTaskId++;
			let stateCopy = [...state];
			let categoryItem = stateCopy.find(
				item => item.categoryId === action.id
			);
			categoryItem.child.push({
				categoryName: action.title, 
				categoryId: uniqueCategoryId,
				parentCategoryId: action.id, 
				child: [],
				clicked: false,
				searchQuery: '',
				taskList: [],
			});

			return stateCopy;
		}

		case 'DEL_CATEGORY': {
			let stateCopy = [...state];
			if (action.parentId) {
				let parentCategoryItem = stateCopy.find(
					item => item.categoryId === action.parentId
				);
				let childCategoryItem = parentCategoryItem.child.filter(
					item => item.categoryId !== action.id
				);
				parentCategoryItem.child = childCategoryItem;
			} else {
				stateCopy = stateCopy.filter(
					item => item.categoryId !== action.id
				);
			}

			return stateCopy
		}

		case 'RENAME_CATEGORY': {
			let stateCopy = [...state];
			if (action.parentId) {
				let parentCategoryItem = stateCopy.find(
					item => item.categoryId === action.parentId
				);
				let childCategoryItem = parentCategoryItem.child.find(
					item => item.categoryId === action.id
				);
				childCategoryItem.categoryName = action.title;
			} else {
				let categoryItem = stateCopy.find(
					item => item.categoryId === action.id
				);
				categoryItem.categoryName = action.title;
			}

			return stateCopy;
		}

		case 'CLICK_CATEGORY': {
			let stateCopy = [...state];
			stateCopy.map(item => {
				item.clicked = false;
				if (item.child) {
					item.child.map(childItem => childItem.clicked = false)
				}
			});
			if (action.parentId) {
				let parentCategoryItem = stateCopy.find(
					item => item.categoryId === action.parentId
				);
				let childCategoryItem = parentCategoryItem.child.find(
					item => item.categoryId === action.id
				);
				childCategoryItem.clicked = !childCategoryItem.clicked;
			} else {
				let categoryItem = stateCopy.find(
					item => item.categoryId === action.id
				);
				categoryItem.clicked = !categoryItem.clicked;
			}

			return stateCopy; 
		}

		case 'ADD_TASK': {
			let stateCopy = [...state];
			if (!stateCopy.find(item => item.clicked) && 
				!stateCopy.find(item => item.child.length > 0)) {
				return stateCopy;
			}
			uniqueTaskId++;
			if (!stateCopy.find(item => item.clicked)) {
				const parents = stateCopy.filter(
					item => (item.child.length > 0)
				);
				const children = parents.find(
					item => item.child.find(
						item => item.clicked
					)
				);
				if (children) {
					const clickedCategory = children.child.find(
						item => item.clicked
					);
					clickedCategory.taskList.push({
						taskName: action.title,
						taskId: uniqueTaskId,
						description: '',
						done: false,
					});
				}
			} else {
				let categoryItem = stateCopy.find(
					item => item.clicked === true
				);
				categoryItem.taskList.push({
					taskName: action.title,
					taskId: uniqueTaskId,
					description: '',
					done: false,
				});
			}

			return stateCopy;
		}
		
		case 'DONE_TASK': {
			let stateCopy = [...state];
			let taskItem;
			if (!stateCopy.find(item => item.clicked)) {
				const parents = stateCopy.filter(
					item => (item.child.length > 0)
				);
				const children = parents.find(
					item => item.child.find(
						it => it.clicked
					)
				);
				const clickedCategory = children.child.find(
					item => item.clicked
				);
				taskItem = clickedCategory.taskList.find(
					item => item.taskId === action.id
				);
				taskItem.done = !taskItem.done;
			} else {
				const categoryItem = stateCopy.find(
					item => item.clicked
				);
				taskItem = categoryItem.taskList.find(
					item => item.taskId === action.id
				);
				taskItem.done = !taskItem.done;
			}

			return stateCopy;
		}

		case 'SAVE_TASK_SETTINGS': {
			let stateCopy = [...state];
			let taskItem;
			let clickedCategory;
			if (!stateCopy.find(item => item.clicked)) {
				const children = stateCopy.find(
					item => item.child.find(
						item => it.clicked
					)
				);
				clickedCategory = children.child.find(item => item.clicked);
				taskItem = clickedCategory.taskList.find(
					item => item.taskId === action.id
				);
			} else {
        clickedCategory = stateCopy.find(item => item.clicked);
      }
      taskItem = clickedCategory.taskList.find(
        item => item.taskId === action.id
      );
      taskItem.description = action.description;
      taskItem.taskName = action.name;

			return stateCopy;
		}

		default:
			return state;
	}
}

const undoableTodos = undoable(
	changeCategoryTree, { 
		filter: includeAction([
			'DEL_CATEGORY',
			'ADD_CATEGORY',
			]) 
	}
)

export default undoableTodos