import React from 'react';
import './App.css';
import NavComponent from './front-end/common/nav';
import LogoComponent from './front-end/common/logo';
import TemplatePage from './front-end/common/templatePage';

function App() {
	return (
		<div className="just-chat-app">
			<LogoComponent />
			<NavComponent />
			<TemplatePage />
		</div>
	);
}

export default App;
