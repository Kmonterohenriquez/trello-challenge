import React from 'react';
import './App.css';
import SingleList from './Components/SingleList/SingleList';
import { connect } from 'react-redux';
const App = props => {
	const { lists } = props;
	return (
		<div className='App'>
			{lists.map(list => (
				<SingleList title={list.title} card={list.card_content}/>
			))}
		</div>
	);
};

const mapStateToProps = state => ({
	lists: state.listReducer
});
export default connect(mapStateToProps)(App);
