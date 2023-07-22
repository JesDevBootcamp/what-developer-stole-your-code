// App: Component containing the entire website.

import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

import "./styles/App.scss";

export default function App() {
	const [content, setContent] = useState({
		title: "Who Is The Best Developer?",
		subtitle: "Select the BEST!... or delete the WORST."
	});

	return <>
		<Header
			title={content.title}
			subtitle={content.subtitle} />
		<main id="main">
			...
		</main>
		<Footer disclaimer="Created by Joshua Elijah Sandoval." />
	</>;
}