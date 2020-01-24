import React from 'react';
import './SingleList.sass';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const SingleList = props => {
	console.log('test props', props);
	return (
		<div className='SingleList'>
			<Droppable droppableId={String(props.list_id)}>
				{provided => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						<div className='SingleList-header'>
							<p className='SingleList-title'>{props.title}</p>
							<i className='fas fa-ellipsis-h'></i>
						</div>
						{props.cards.map((card, i) => (
							<Draggable draggableId={String(card.id)} index={i} key={card.id}>
								{provided => (
									<div className='SingleList-card-content'>
										<p
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
										>
											{card.card_content}
										</p>
										{provided.placeholder}
									</div>

								)}
							</Draggable>
						))}

						{provided.placeholder}
					</div>
				)}
				{/* </div> */}
			</Droppable>
		</div>
	);
};

export default SingleList;
