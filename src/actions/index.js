export const addCategory = (title) => ({
	type: 'ADD_CATEGORY',
	title,
});

export const delCategory = (id) => ({
	type: 'DEL_CATEGORY',
	id,
});

export const renameCategory = (id, title) => ({
	type: 'RENAME_CATEGORY',
	id,
	title,
});