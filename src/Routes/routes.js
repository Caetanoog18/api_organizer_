const express = require('express');
const bodyParser = require("body-parser");
const userRoutes = require("../Routes/Users/userRoute");

const app = express();

app.use(bodyParser.json());
app.use('/user', userRoutes);


module.exports = app;

