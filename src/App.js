import React, { Component } from 'react';
import './App.css';
import NavComponent from './front-end/common/nav';
import AboutPage from './front-end/common/aboutPage';
import InputMessageForm from './front-end/app-pages/messageForm';
import LoginComponent from './front-end/app-pages/signIn/loginComponent';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'signinForm'
		};
	}
	onRouteChange = (route) => {
		this.setState({ route: route });
	};

	render() {
		return (
			<div className="just-chat-app">
				<NavComponent onRouteChange={this.onRouteChange} />

				{this.state.route === 'signinForm' ? (
					<div>
						<AboutPage onRouteChange={this.onRouteChange} />
						<LoginComponent onRouteChange={this.onRouteChange} />
					</div>
				) : (
					<div>
						<InputMessageForm />
					</div>
				)}
			</div>
		);
	}
}
