import React from 'react';
import './App.sass';
import SingleList from './Components/SingleList/SingleList';
import { connect } from 'react-redux';
import AddCard from './Components/AddCard/AddCard';
import AddList from './Components/AddList/AddList';
import bg from './img/mountains.jpg';
import Nav from './Components/Nav/Nav';
import { DragDropContext } from 'react-beautiful-dnd';

const App = props => {
	const { lists } = props;
	
	const onDragEnd =()=>{
		//TODO: reordering logic
	}
	return (
		<DragDropContext  onDragEnd={onDragEnd}>
			<div className='App'>
			<img className='bg' src={bg} alt='' />
			<Nav />
			<div className='table'>
				{lists.map(list => (
					<div className='table-bg' key={list.id}>
						<SingleList list_id={list.id} title={list.title} cards={list.cards} />
						<AddCard list_id={list.id} />
					</div>
				))}
				<AddList />
			</div>
			</div>
		</DragDropContext>
	);
};

const mapStateToProps = state => ({
	lists: state.listReducer
});
export default connect(mapStateToProps)(App);
