// App: Component containing the entire website.

import Footer from "./components/Footer";
import Header from "./components/Header";

import "./styles/App.scss";

export default function App() {
	return <>
		<Header title="Who Is The Best Developer?" />
		<main id="main">
			...
		</main>
		<Footer disclaimer="Created by Joshua Elijah Sandoval." />
	</>;
}