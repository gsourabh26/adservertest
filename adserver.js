const http = require('http');
const express = require('express');
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname, 'public')))


app.get("/render/getJS", (req, res) => {
	res.sendFile(__dirname + "/adscript.js");
})

app.get("/", (req, res) => {
	res.setHeader("Content-Type", "text/html");
	res.sendFile(__dirname + "/index.html");
})


app.listen(5000, _=> console.log("listening to 5000"));