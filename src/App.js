import React from 'react';
import './App.css';
import NavComponent from './front-end/common/nav';
import LogoComponent from './front-end/common/logo';
import AboutPage from './front-end/common/aboutPage';

function App() {
	return (
		<div className="just-chat-app">
			<AboutPage />
			<LogoComponent />
			<NavComponent />
		</div>
	);
}

export default App;
