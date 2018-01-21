const initialState = {
	categoryList: [
		{
			categoryName: 'Category 1', 
			categoryId: 0, 
			child: false,
			clicked: true,
			taskList: [
				{
					taskName: 'Task 1',
					taskId: 0,
					description: '',
					done: false,
				}
			],
		},
		{
			categoryName: 'Category 2', 
			categoryId: 1, 
			child: false,
			clicked: false,
			taskList: [
				{
					taskName: 'Task 2',
					taskId: 1,
					description: '',
					done: false,
				}
			],
		},
		{
			categoryName: 'Category 3', 
			categoryId: 2, 
			child: false,
			clicked: false,
			taskList: [
				{
					taskName: 'Task 3',
					taskId: 2,
					description: '',
					done: false,
				}
			],
		}
	],
}

export default initialState;