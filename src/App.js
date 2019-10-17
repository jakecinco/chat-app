import React from 'react';
import './App.css';
import NavComponent from './front-end/common/nav';
import LogoComponent from './front-end/common/logo';

function App() {
	return (
		<div className="just-chat-app">
			<p className="f1 link dib grow bg-light-blue tc yellow underline pa3 pointer">
				<LogoComponent />JUST CHAT APP
			</p>
			<NavComponent />
		</div>
	);
}

export default App;
