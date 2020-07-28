const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

process.env.NODE_ENV = "development";

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cors("*"));

app.get("/", (req, res) => {
	res.status(200).send("<h1>Index</h1>");
});

app.get("/:num", (req, res) => {
	let pageNum = req.params.num;
	res.status(200).send(`<h1>Page number ${pageNum}</h1>`);
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
	console.log("Listening on port " + port);
});
