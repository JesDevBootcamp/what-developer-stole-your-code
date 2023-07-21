// App: Component containing the entire website.

import Content from "./components/Content";
import GlobalFooter from "./components/GlobalFooter";
import GlobalHeader from "./components/GlobalHeader";
import "./styles/App.scss";

export default function App() {
	return <>
		<GlobalHeader>
			Who Is The Best Developer?
		</GlobalHeader>
		<Content>
			...
		</Content>
		<GlobalFooter>
			Created by Joshua Elijah Sandoval.
		</GlobalFooter>
	</>;
}