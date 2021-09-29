const express = require('express');
const router = express.Router();
const login = require("../../Controllers/Authentication/login");

router.post('/login', login.login);

module.exports = router;