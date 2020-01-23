import React from 'react';
// import logo from '../../img/trello_logo.png';
import './Nav.sass'
const Nav = () => {
	return (
		<header className='Nav' >
			<i className="fas fa-home"></i>
			<img
				src='https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png'
				alt=''
				className='logo'
			/>
			<p>Kevin Montero <i className="far fa-user"></i></p>
		</header>
	);
};


export default Nav;
