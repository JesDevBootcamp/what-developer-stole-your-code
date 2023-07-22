import express from "express";
import ViteExpress from "vite-express";
import DATA from "./database.js";

// Setup Express instance:
const app = express();

// Setup Vite Express and listen to default port:
ViteExpress.listen(app, 80, () => {
	console.log("Server is listening on port http://127.0.0.1");
});

// Setup endpoint to respond with all data:
app.get("/api/", (req, res) => {
	res.json(DATA);
});

// Setup endpoint to add suspect:
app.put("/api/:suspect", (req, res) => {
	// Get suspect from request parameters:
	const { suspect } = req.params;

	// Add suspect to DATA:
	DATA.suspects.push(suspect);

	// Respond with affirmation:
	res.send("Added Suspect.");
});

// Setup endpoint to update thief name:
app.post("/api/thief/:thief", (req, res) => {
	// Get name of thief within parameters:
	const { thief } = req.params;

	// Update thief value:
	DATA.thief = thief;

	// Respond with affirmation:
	res.send("Updated Thief.");
});

// Setup endpoint to delete name:
app.delete("/api/:name", (req, res) => {
	// Find the index of name within DATA:
	const { name } = req.params;
	const index = DATA.suspects.findIndex(el => el === name);

	// Send a 404 status if name is not found:
	if (index === -1) {
		res.status(404).send(`${name} was not found.`);
		return;
	}

	// Remove name from DATA:
	DATA.suspects.splice(index, 1);

	// Respond with affirmation:
	res.send("Deleted Name.");
});