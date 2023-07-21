// Global Header: Component for the website header.

import Content from "./Content";
import "../styles/GlobalHeader.scss";

export default function GlobalHeader({ children }) {
	return (
		<h1 className="GlobalHeader">
			<Content>
				{children}
			</Content>
		</h1>
	);
}