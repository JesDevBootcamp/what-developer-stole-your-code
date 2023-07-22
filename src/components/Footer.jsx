// Footer: Component for the website footer.

import "../styles/Footer.scss";

export default function Footer({ disclaimer }) {
	return (
		<footer className="Footer">
			{disclaimer}
		</footer>
	);
}