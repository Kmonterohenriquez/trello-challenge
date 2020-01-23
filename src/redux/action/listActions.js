import { ADD_LIST, ADD_CARD } from '../types';
export const addList = title => {
	return {
		type: ADD_LIST,
		payload: title
	};
};
