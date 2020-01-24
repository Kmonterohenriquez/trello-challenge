import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addList } from '../../redux/action/listActions';
import './AddList.sass';
const AddList = props => {
	const [toggleForm, setToggleForm] = useState(false);
	const [text, setText] = useState('');

	const handleAddBtn = async () => {
		const { dispatch } = props;
		if (text) {
			await dispatch(addList(text));
			setToggleForm(false);
		}
		return;
	};

	return (
		<div className={`${toggleForm ? 'white' : 'black'} AddList`}>
			{toggleForm ? (
				<>
					<input
						type='text'
						onChange={e => setText(e.target.value)}
						placeholder='Enter list title...'
						value={text}
					/>
					<div className='btn-container'>
						<button className='add-btn' onClick={handleAddBtn}>
							Add List
						</button>
						<i
							onClick={() => setToggleForm(false)}
							className='cancel-btn fas fa-times'
						></i>
					</div>
				</>
			) : (
				<p onClick={() => setToggleForm(true)}>
					<i className='fas fa-plus'></i>Add another list
				</p>
			)}
		</div>
	);
};

export default connect()(AddList);
