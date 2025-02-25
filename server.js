const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const connectDB = require('./config/db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

connectDB();



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});