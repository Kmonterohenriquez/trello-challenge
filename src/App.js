import React from 'react';
import './App.sass';
import SingleList from './Components/SingleList/SingleList';
import { connect } from 'react-redux';
import AddCard from './Components/AddCard/AddCard';
import bg from './img/mountains.jpg';
import Nav from './Components/Nav/Nav';

const App = props => {
	const { lists } = props;
	return (
		<div className='App'>
			<img className='bg' src={bg} alt='' />
			<Nav />
			<div className='table'>
				{lists.map(list => (
					<div className='table-bg' key={list.id}>
						<SingleList title={list.title} cards={list.cards} />
						<AddCard />
					</div>
				))}
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	lists: state.listReducer
});
export default connect(mapStateToProps)(App);
