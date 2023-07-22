// App: Component containing the entire website.

import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Perpetrator from "./components/Perpetrator";
import Suspect from "./components/Suspect";

import "./styles/App.scss";

export default function App({ data }) {
	// Setup state for the thief:
	const [thief, setThief] = useState("");

	return <>
		<Header
			title="What Developer Stole Your Code?"
			subtitle={
				!thief && "You Probably Misplaced It..."
			}
		/>
		<main id="main">
			{!thief ?
				// Set thief to a random suspect when submitting new one:
				<Suspect callback={() => {
					const suspects = data.suspects;
					const index = Math.floor(Math.random() * suspects.length);
					setThief(suspects[index]);
				}} /> :
				// Display the thefty perpetrator!:
				<Perpetrator name={thief} />
			}
		</main>
		<Footer disclaimer={
			thief && `At least it wasn't ${data.thief || "me"} again.`
		} />
	</>;
}