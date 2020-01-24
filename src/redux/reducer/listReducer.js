import { ADD_LIST, ADD_CARD, DRAG_CARD } from '../types';
import initialState from './data';

let list_id = 4;
let card_id = 27;
const listReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_LIST:
			const newList = {
				id: list_id,
				title: payload,
				cards: []
			};

			list_id++;
			return [...state, newList];

		case ADD_CARD:
			const newCard = {
				id: card_id,
				card_content: payload.text
			};
			card_id++;

			const newState = state.map(list => {
				if (list.id === payload.list_id) {
					return { ...list, cards: [...list.cards, newCard] };
				} else {
					return list;
				}
			});
			console.log('payload', payload);
			return newState;
		case DRAG_CARD:
			const {
				droppableIdStart,
				droppableIdEnd,
				droppableIndexStart,
				droppableIndexEnd
			} = payload;

			const newState1 = [...state];
			// If the card is on the same list
			if (droppableIdStart === droppableIdEnd) {
				const list = state.find(list => +droppableIdStart === list.id);
				const card = list.cards.splice(droppableIndexStart, 1);
				list.cards.splice(droppableIndexEnd, 0, ...card);
				console.log('testing', list.cards);
			}

			// if the card is on another list
			if (droppableIdStart !== droppableIdEnd) {
				//Get location from where the card is picked up
				const listStart = state.find(list => +droppableIdStart === list.id);

				// pull out the card from where was picked up
				const card = listStart.cards.splice(droppableIndexStart, 1);

				const listEnd = state.find(list => +droppableIdEnd === list.id);
				listEnd.cards.splice(droppableIndexEnd, 0, ...card);
			}
			return newState1;

		default:
			return state;
	}
};

export default listReducer;
