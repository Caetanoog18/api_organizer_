const express = require('express');
const bodyParser = require("body-parser");
const userRoutes = require("../Routes/Users/userRoute");
const companyRoutes = require("../Routes/Companies/companyRoute");
const apiRoutes = require('../Routes/APIs/apiRoute');
const authenticationRoutes = require('../Routes/Authentication/login');

const app = express();

app.use(bodyParser.json());
app.use('/user', userRoutes);
app.use('/company', companyRoutes);
app.use('/api', apiRoutes);
app.use('/authentication', authenticationRoutes);


module.exports = app;

