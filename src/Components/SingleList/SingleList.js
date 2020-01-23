import React from 'react';
import './SingleList.sass'
const SingleList = props => {
	return (
		<div className='SingleList'>
			<div  className="SingleList-header">
				<p className='SingleList-title'>{props.title}</p>
				<i className="fas fa-ellipsis-h"></i>
			</div>
			{props.cards.map(card => (
				<div className='SingleList-card-content'>
					<p>{card.card_content}</p>
				</div>
			))}
		</div>
	);
};

export default SingleList;
