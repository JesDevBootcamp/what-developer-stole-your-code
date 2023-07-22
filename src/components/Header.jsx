// Header: Component for the website header.

import "../styles/Header.scss";

export default function Header({ title, subtitle }) {
	return (
		<header className="Header">
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
		</header>
	);
}