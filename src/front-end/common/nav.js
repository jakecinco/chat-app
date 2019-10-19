import React from 'react';
import LogoComponent from './logo';

const NavComponent = () => {
	return (
		<nav
			className="bg-light-blue"
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}
		>
			<LogoComponent />
			<p className="f2 link dim dark-blue underline pointer">Sign-In</p>
			<p className="f2 link dim bg-light-blue red underline ma1 pointer">Log-Out</p>
		</nav>
	);
};

export default NavComponent;
