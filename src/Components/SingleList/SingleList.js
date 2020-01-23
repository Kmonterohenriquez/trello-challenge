import React from 'react';
import './SingleList.sass'
const SingleList = props => {
	return (
		<div className='SingleList'>
			<p className='SingleList-title'>{props.title}</p>
			{props.cards.map(card => (
				<div className='SingleList-card-content'>
					<p>{card.card_content}</p>
				</div>
			))}
		</div>
	);
};

export default SingleList;
