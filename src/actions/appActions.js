export const addCategory = (title) => ({
	type: 'ADD_CATEGORY',
	title,
});

export const addChildrenCategory = (id, title) => ({
  type: 'ADD_CHILDREN_CATEGORY',
  id,
  title,
});

export const delCategory = (id, parentId) => ({
	type: 'DEL_CATEGORY',
	id,
  parentId,
});

export const renameCategory = (id, title) => ({
	type: 'RENAME_CATEGORY',
	id,
	title,
});

export const clickCategory = (idx) => ({
  type: 'CLICK_CATEGORY',
  idx,
});

export const addTask = (title) => ({
  type: 'ADD_TASK',
  title,
});

export const showTaskList = () => ({
  type: 'SHOW_TASKLIST',
});

export const doneTask = (id) => ({
  type: 'DONE_TASK',
  id
});

