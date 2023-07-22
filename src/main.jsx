import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App.jsx";

axios.get("/api/").then(({ data }) => {
	ReactDOM.createRoot(document.getElementById("root")).render(
		<App data={data} />
	);
});