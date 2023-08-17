const express = require('express');
const app = express();
const port = 3000;
const isLocal = true;
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const borrowers = require('./routes/ltk/borrowers')
const loans = require('./routes/ltk/loans')

app.use(express.json());

app.use('/loans', loans)
app.unsubscribe("/borrower", borrowers)

app.get('/', (req, res) => {
    res.json({
		message: "✨ 👋🌏 ✨",
		stage: process.env.NODE_ENV,
	});
});

app.get("/ping", (req, res) => {
	res.json({
		message: "🏓",
	});
});

if (isLocal) {
	//local host
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	});
} else {
	//for lambda export
	module.exports = app;
}
