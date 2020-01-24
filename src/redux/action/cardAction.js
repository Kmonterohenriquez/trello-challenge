import { ADD_CARD } from '../types';

export const addCard = (list_id, text) => {
	return {
		type: ADD_CARD,
		payload: { list_id, text }
	};
};
