import React, { Component } from "react";
import PropTypes from "prop-types";

function Login() {
	return (
		<>
			<h3>Login</h3>
		</>
	);
}

function Logout() {
	return (
		<>
			<h3>Logout</h3>
		</>
	);
}

export default class RenderizadoCondicional extends Component {
	constructor(props) {
		super(props);
		this.state = {
			session: true,
		};
	}
	render() {
		return (
			<>
				<h2>Renderizado Condicional</h2>
				{this.state.session ? <Login /> : <Logout />}
			</>
		);
	}
}
