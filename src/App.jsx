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
			subtitle={!thief && "You Probably Misplaced It..."}
		/>
		<main id="main">
			{thief ?
				<Perpetrator name={thief} /> :
				<Suspect callback={() => {
					let suspects = data.suspects;
					setThief(suspects[Math.floor(Math.random() * suspects.length)])
				}} />
			}
		</main>
		<Footer disclaimer={thief &&
			`At least it wasn't ${data.thief.toUpperCase() || "you misplacing it"} again.`
		} />
	</>;
}