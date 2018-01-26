const categoryDefaultItem = {
	categoryName: 'Category 1', 
	categoryId: 1,
	parentCategoryId: null, 
	child: [],
	clicked: false,
	searchQuery: '',
	taskList: [
		{
			taskName: 'Task 1',
			taskId: 1,
			description: '',
			done: false,
		}
	]
}

const defaultDataStructure = {
	categoryList: [
		categoryDefaultItem,
	],
}

export default defaultDataStructure;