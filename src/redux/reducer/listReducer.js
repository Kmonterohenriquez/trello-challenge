import { ADD_LIST } from '../types';

const initialState = [
	{
		id: 0,
		title: 'title card 1',
		cards: [
			{
				id: 0,
				card_content: 'sample text '
			},
			{
				id: 0,
				card_content: 'sample text '
			},
			{
				id: 0,
				card_content: 'sample text '
			}
		]
	},
	{
		id: 1,
		title: 'title card 2',
		cards: [
			{
				id: 0,
				card_content: 'sample text '
			},
			{
				id: 0,
				card_content: 'sample text '
			},
			{
				id: 0,
				card_content: 'sample text '
			}
		]
	},
	{
		id: 2,
		title: 'title card 3',
		cards: [
			{
				id: 0,
				card_content: 'sample text '
			},
			{
				id: 0,
				card_content: 'sample text '
			},
			{
				id: 0,
				card_content: 'sample text '
			}
		]
	}
];
let id = 3;
const listReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_LIST:
			const newList = {
				id,
				title: payload,
				cards: []
			};

			id++;
			return [...state, newList];
		default:
			return state;
	}
};

export default listReducer;
