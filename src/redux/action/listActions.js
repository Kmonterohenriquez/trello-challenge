import { ADD_LIST } from '../types';
export const addList = title => {
	return {
		type: ADD_LIST,
		payload: title
	};
};
