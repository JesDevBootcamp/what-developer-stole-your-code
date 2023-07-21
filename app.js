import express from "express";
import ViteExpress from "vite-express";

// Setup Express instance:
const app = express();

// Setup Vite Express and listen to default port:
ViteExpress.listen(app, 80, () => {
	console.log("Server is listening on port http://127.0.0.1");
});