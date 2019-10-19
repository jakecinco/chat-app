import React from 'react';
import './App.css';
import NavComponent from './front-end/common/nav';
import AboutPage from './front-end/common/aboutPage';
import InputMessageForm from './front-end/app-pages/messageForm';
import LoginComponent from './front-end/app-pages/signIn/loginComponent';

function App() {
	return (
		<div className="just-chat-app">
			<NavComponent />
			<LoginComponent />
			<InputMessageForm />
			<AboutPage />
		</div>
	);
}

export default App;
