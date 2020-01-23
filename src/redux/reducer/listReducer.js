const initialState = [
	{
		id: 0,
		title: 'title card',
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

const  listReducer = (state= initialState, action) => {
	const { type } = action;
	switch (type) {
		default:
			return state;
	}
};

export default listReducer
