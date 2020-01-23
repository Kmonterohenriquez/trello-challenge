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

const listReducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		default:
			return state;
	}
};

export default listReducer;
