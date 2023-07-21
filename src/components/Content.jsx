// Content: Component for self-contained content.

import "../styles/Content.scss";

export default function Content({ children }) {
	return (
		<article className="Content">
			{children}
		</article>
	);
}