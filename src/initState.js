const categoryDefaultItem = {
	categoryName: 'Category 1', 
	categoryId: 1,
	parentCategoryId: null, 
	child: [],
	clicked: false,
	taskList: [
		{
			taskName: 'Task 1',
			taskId: 0,
			description: '',
			done: false,
		}
	]
}

const initialState = {
	categoryList: [
		categoryDefaultItem,
	],
}

export default initialState;