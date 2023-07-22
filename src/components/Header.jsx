// Header: Component for the website header.

import "../styles/Header.scss";

export default function Header({ title }) {
	return (
		<h1 className="Header">{title}</h1>
	);
}