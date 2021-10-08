export const addItem = (element, arr) => ({ type: 'ADD', element, arr });
export const deleteItem = (id, arr) => ({ type: 'DELETE', id, arr });
export const editItem = (id, text) => ({ type: 'EDIT', id, text });
export const countItems = () => ({ type: 'COUNT' });
