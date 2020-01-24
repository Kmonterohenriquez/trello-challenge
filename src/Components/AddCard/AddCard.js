import React, { useState } from 'react';
import './AddCard.sass';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addCard } from '../../redux/action/cardAction';

const AddCard = props => {
	const [toggleForm, setToggleForm] = useState(false);
	const [text, setText] = useState('');

	const handleAddCard = list_id => {
		const { dispatch } = props;
		if (text) {
			dispatch(addCard(list_id, text));
		}
		setText('')
		setToggleForm(false);
		console.log('IDD HEREEE', list_id)
	};

	return (
		<div className='AddCard'>
			{toggleForm ? (
				<>
					<Textarea
						autoFocus
						value={text}
						rows='15'
						onChange={e => setText(e.target.value)}
						placeholder='Enter a title for the card...'
					/>
					<div className='btn-container'>
						<button
							className='add-btn'
							onClick={() => handleAddCard(props.list_id)}
						>
							Add Card
						</button>
						<i
							onClick={() => setToggleForm(false)}
							className='cancel-btn fas fa-times'
						></i>
					</div>
				</>
			) : (
				<p onClick={() => setToggleForm(true)}>
					<i className='fas fa-plus'></i>Add another card
				</p>
			)}
		</div>
	);
};

export default connect()(AddCard);
