// Suspect: Component to PUT suspect into question.

import axios from "axios";
import "../styles/Suspect.scss";

export default function Suspect({ callback }) {
	const submitHandler = (event) => {
		// Prevent page reload:
		event.preventDefault();

		// Add suspect to database:
		const name = document.getElementById("suspect").value.trim();
		axios.put(`/api/${name}`);

		// Run callback:
		callback();
	};

	return (
		<form onSubmit={submitHandler} className="Suspect">
			<label htmlFor="suspect">
				Who Do You Suspect?
			</label>
			<span>
				<input id="suspect" required minLength="3" type="text" />
				<button type="submit">Submit</button>
			</span>
		</form>
	);
}