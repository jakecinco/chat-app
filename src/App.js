import React from 'react';
import './App.css';
import NavComponent from './front-end/common/nav';
import LogoComponent from './front-end/common/logo';
import AboutPage from './front-end/common/aboutPage';
import InputMessageForm from './front-end/app-pages/messageForm';

function App() {
	return (
		<div className="just-chat-app">
			<AboutPage />
			<LogoComponent />
			<NavComponent />
			<InputMessageForm />
		</div>
	);
}

export default App;
