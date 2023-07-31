require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;
const uri = process.env.DATABASE;

app.use(cors());

const start = async () => {
	try {
		await mongoose.connect(uri);

		app.listen(PORT, () => console.log(`server started on port ${PORT}`));
	} catch (e) {
		console.error(e);
	}
};

start();
