import { ADD_LIST, ADD_CARD, DRAG_CARD } from '../types';

const initialState = [
	{
		id: 0,
		title: 'Backlog',
		cards: [
			{
				id: 0,
				card_content: 'sample text '
			},
			{
				id: 1,
				card_content: 'sample text '
			},
			{
				id: 2,
				card_content: 'sample text '
			},
			{
				id: 3,
				card_content: 'sample text '
			},
			{
				id: 6,
				card_content: 'sample text '
			},
			{
				id: 7,
				card_content: 'sample text '
			},
			{
				id: 8,
				card_content: 'sample text '
			},
			{
				id: 9,
				card_content: 'sample text '
			},
			{
				id: 10,
				card_content: 'sample text '
			},
			{
				id: 11,
				card_content:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus soluta impedit cumque, atque maiores enim corporis necessitatibus ipsa unde, dolorum repudiandae. Labore id illum voluptatibus itaque et? Dolores, nesciunt iure. '
			},
			{
				id: 12,
				card_content: 'sample text '
			},
			{
				id: 13,
				card_content: 'sample text '
			}
		]
	},
	{
		id: 1,
		title: 'To Do',
		cards: [
			{
				id: 14,
				card_content: 'sample text '
			},
			{
				id: 15,
				card_content: 'sample text '
			},
			{
				id: 16,
				card_content: 'sample text '
			}
		]
	},
	{
		id: 2,
		title: 'In Progress',
		cards: [
			{
				id: 17,
				card_content: 'sample text '
			},
			{
				id: 18,
				card_content: 'sample text '
			},
			{
				id: 19,
				card_content: 'sample text '
			},
			{
				id: 20,
				card_content: 'sample text '
			},
			{
				id: 21,
				card_content: 'sample text '
			},
			{
				id: 22,
				card_content: 'sample text '
			},
			{
				id: 23,
				card_content: 'sample text '
			}
		]
	},
	{
		id: 3,
		title: 'Completed',
		cards: [
			{
				id: 24,
				card_content: 'sample text '
			},
			{
				id: 25,
				card_content: 'sample text '
			},
			{
				id: 26,
				card_content: 'sample text '
			}
		]
	}
];
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
			card_id++ ;

			const newState = state.map(list => {
				if (list.id === payload.list_id) {
					return { ...list, cards: [...list.cards, newCard] };
				} else {
					return list;
				}
			});
			console.log('payload', payload)
			return newState;
		case DRAG_CARD: 
			const {
				droppableIdStart,
				droppableIdEnd,
				droppableIndexStart,
				droppableIndexEnd,
				// droppableId
			} = payload;

			const newState1 = [...state];
			// If the card is on the same list
			if(droppableIdStart === droppableIdEnd){
				const list = state.find(list => +droppableIdStart === list.id);
				const card = list.cards.splice(droppableIndexStart, 1);
				list.cards.splice(droppableIndexEnd, 0, ...card)
				console.log('holaaaaaaaaaaaaa', list.cards)
				// console.log(droppableIdStart, droppableIdEnd)
				// console.log('state', state)
				// console.log()
			}
			return newState1
			
		default:
			return state;
	}
};

export default listReducer;
