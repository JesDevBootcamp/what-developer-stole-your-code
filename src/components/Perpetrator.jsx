// Perpetrator: Component to display, UPDATE and DELETE a perpetrator!

import axios from "axios";
import "../styles/Perpetrator.scss";

export default function Perpetrator({ name }) {
	// Update last thief in database to perpetrator:
	axios.post(`/api/thief/${name}`);

	// Delete perpetrator from database:
	axios.delete(`/api/${name}`);

	// Return the perpetrator!
	return (
		<div className="Perpetrator">
			<span>It Was {name}!</span>
			<h4>They Left, Though. No More Stolen Code!</h4>
		</div>
	);
}