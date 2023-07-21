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

// Setup endpoint to add name:
app.put("/api/:name", (req, res) => {
	// Get name from request parameters:
	const { name } = req.params;

	// Add name to DATA:
	DATA.push(name);

	// Respond with affirmation:
	res.send("Added Data");
});

// Setup endpoint to update name:
app.post("/api/:name/:newName", (req, res) => {
	// Get name and newName within DATA:
	const { name, newName } = req.params;

	// Find the index of name within DATA:
	const index = DATA.findIndex(el => el === name);

	// Update name with newName within DATA:
	DATA[index] = newName;

	// Respond with affirmation:
	res.send("Updated Name.");
});

// Setup endpoint to delete name:
app.delete("/api/:name", (req, res) => {
	// Find the index of name within DATA:
	const { name } = req.params;
	const index = DATA.findIndex(el => el === name);

	// Send a 404 status if name is not found:
	if (index === -1) {
		res.status(404).send(`${name} was not found.`);
		return;
	}

	// Remove name from DATA:
	DATA.splice(index, 1);

	// Respond with affirmation:
	res.send("Deleted Name.");
});