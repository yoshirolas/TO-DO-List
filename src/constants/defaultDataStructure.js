const categoryDefaultItem = {
	categoryName: 'Category 1', 
	categoryId: 1,
	parentCategoryId: null, 
	child: [],
	clicked: false,
	searchQuery: '',
	taskList: [
		{
			taskName: 'To sleep',
			taskId: 1,
			description: 'To sleep on this weekend',
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