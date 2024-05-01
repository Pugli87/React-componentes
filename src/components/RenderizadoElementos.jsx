import React, { Component } from "react";
import PropTypes from "prop-types";
import data from "../helpers/data.json";

function ElementoLista(props) {
	return (
		<li>
			<a href={props.el.web} target="_blank">
				{props.el.name}
			</a>
		</li>
	);
}

export default class RenderizadoElementos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			season: ["primavera", "Verano", "Otoño", "Primavera"],
		};
	}
	render() {
		return (
			<>
				<h2> Renderizado Elementos </h2>
				<h3> Estaciones del año </h3>
				<ol>
					{this.state.season.map((el, index) => (
						<li key={index}>{el}</li>
					))}
				</ol>
				<h3> Frameworks Frontend Javascript </h3>
				<ul>
					{data.frameworks.map((el) => (
						<ElementoLista key={el.id} el={el} />
					))}
				</ul>
			</>
		);
	}
}
