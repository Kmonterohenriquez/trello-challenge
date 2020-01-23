import React from 'react';
import './App.sass';
import SingleList from './Components/SingleList/SingleList';
import { connect } from 'react-redux';

const App = props => {
	const { lists } = props;
	return (
		<div className='App'>
			<div className='table'>
				{lists.map(list => (
					<SingleList key={list.id} title={list.title} cards={list.cards} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	lists: state.listReducer
});
export default connect(mapStateToProps)(App);
