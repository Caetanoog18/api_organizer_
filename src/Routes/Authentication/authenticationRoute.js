const express = require('express');
const router = express.Router();
const authenticationRoute = require("../../Controllers/Authentication/login");
const refresh = require("../../Controllers/Authentication/refreshToken");

router.post('/refresh', refresh.refreshToken);
router.post('/login', authenticationRoute.login);

module.exports = router;