import React from 'react';
import './App.sass';
import SingleList from './Components/SingleList/SingleList';
import { connect } from 'react-redux';
import AddCard from './Components/AddCard/AddCard';

const App = props => {
	const { lists } = props;
	return (
		<div className='App'>
			<div className='table'>
				{lists.map(list => (
					<div className="table-bg" key={list.id}>
						<SingleList  title={list.title} cards={list.cards} />
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
