// Global Footer: Component for the website footer.

import Content from "./Content";
import "../styles/GlobalFooter.scss";

export default function GlobalFooter({ children }) {
	return (
		<footer className="GlobalFooter">
			<Content>
				{children}
			</Content>
		</footer>
	);
}