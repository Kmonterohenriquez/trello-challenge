import React, { useState } from 'react';
import './AddCard.sass';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
// import addList from '../../redux/action/listActions'
const AddCard = () => {
	const [toggleForm, setToggleForm] = useState(false);
	const [text, setText] = useState('');

	// const handleAddList =()=>{

	// }
	return (
		<div className='AddCard'>
			{toggleForm ? (
				<>
					<Textarea
						autofocus
						value={text}
						rows='15'
						onChange={e => setText(e.target.value)}
						placeholder='Enter a title for the card...'
					/>
					{/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
					<div className='btn-container'>
						<button className='add-btn' onClick={() => setToggleForm(false)}>
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
