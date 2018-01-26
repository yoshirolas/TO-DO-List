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

export const renameCategory = (id, parentId, title) => ({
	type: 'RENAME_CATEGORY',
	id,
  parentId,
	title,
});

export const clickCategory = (id, parentId) => ({
  type: 'CLICK_CATEGORY',
  id,
  parentId,
});

export const addTask = (title) => ({
  type: 'ADD_TASK',
  title,
});

export const doneTask = (id) => ({
  type: 'DONE_TASK',
  id
});

export const filterTaskBySearchQuery = (query) => ({
  type: 'FILTER_TASK_BY_SEARCH_QUERY',
  query
});

export const filterTaskByDone = () => ({
  type: 'FILTER_TASK_BY_DONE',
});

export const clearSearchQuery = () => ({
  type: 'CLEAR_SEARCH_QUERY',
});

export const showTaskSettings = (id) => ({
  type: 'SHOW_TASK_SETTINGS',
  id,
});

export const closeTaskSettings = () => ({
  type: 'CLOSE_TASK_SETTINGS',
});

export const saveTaskSettings = (name, description, id) => ({
  type: 'SAVE_TASK_SETTINGS',
  name,
  description,
  id,
});
