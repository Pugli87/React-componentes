import React from "react";
import PropTypes from "prop-types";

export default function Propiedades({
	defecto = "Las props",
	cadena = "",
	numero = 0,
	booleano = false,
	arreglo = [],
	objeto = {},
	funcion = () => {},
	elementoReact,
	componenteReact,
}) {
	return (
		<>
			<h2>{defecto}</h2>
			<ul>
				<li>{cadena}</li>
				<li>{numero}</li>
				<li>{booleano ? "Verdadero" : "Falso"}</li>
				<li>{arreglo.join(", ")}</li>
				<li>{objeto.nombre + " - " + objeto.correo}</li>
				<li>{arreglo.map(funcion).join(", ")}</li>
				<li>{elementoReact}</li>
				<li>{componenteReact}</li>
			</ul>
		</>
	);
}

Propiedades.propTypes = {
	cadena: PropTypes.string,
	numero: PropTypes.number,
	booleano: PropTypes.bool,
	arreglo: PropTypes.array,
	objeto: PropTypes.object,
	funcion: PropTypes.func,
	elementoReact: PropTypes.element.isRequired,
	componenteReact: PropTypes.element.isRequired,
};
