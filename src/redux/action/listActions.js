import { ADD_LIST, DRAG_CARD } from '../types';
export const addList = title => {
	return {
		type: ADD_LIST,
		payload: title
	};
};

export const sortCards = (
	droppableIdStart,
	droppableIdEnd,
	droppableIndexStart,
	droppableIndexEnd,
	draggableId
) => {
	return {
		type: DRAG_CARD,
		payload: {
			droppableIdStart,
			droppableIdEnd,
			droppableIndexStart,
			droppableIndexEnd,
			draggableId
		}
	};
};
