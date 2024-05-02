import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<section className="hidde">
				<div>
					<a href="https://vitejs.dev" target="_blank">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className="card">
					<button onClick={() => setCount((count) => count + 1)}>
						count is {count}
					</button>
					<p>
						Edit <code>src/App.jsx</code> and save to test HMR
					</p>
				</div>
				<p className="read-the-docs">
					Click on the Vite and React logos to learn more
				</p>
				<hr />
			</section>
			<section>
				<Componente msg="Hola soy un Componente Funcional Expresado desde una prop" />
				<hr />
				<Propiedades
					cadena="Esto es una cadena de texto"
					numero={19}
					booleano={true}
					arreglo={[1, 2, 3]}
					objeto={{ nombre: "Jon", correo: "jonmircha@gmail.com" }}
					funcion={(num) => num * num}
					elementoReact={<i>Esto es un elemento React</i>}
					componenteReact={
						<Componente msg="Soy un componente pasado como Prop" />
					}
				/>
				<hr />
				<Estado />
				<hr />
				<RenderizadoCondicional />
				<hr />
				<RenderizadoElementos />
				<hr />
				<EventosES6 />
				<hr />
				<EventosES7 />
				<hr />
				<MasSobreEventos />
				<hr />
			</section>
		</>
	);
}

export default App;
