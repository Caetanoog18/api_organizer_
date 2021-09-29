const express = require('express');
const router = express.Router();
const createUser = require("../../Controllers/Users/createUser");
const getUser = require("../../Controllers/Users/getUser");
const getUsers = require("../../Controllers/Users/getAllUsers");
const updateUser = require("../../Controllers/Users/updateUser");
const deleteUser = require("../../Controllers/Users/deleteUser");
const {validateJWT} = require ("../../Controllers/Authentication/JWT/services/authenticateJWT");

router.post('/register', createUser.createUser);
router.get('/byUsername/:username', validateJWT, getUser.getUser);
router.get('/all', validateJWT,  getUsers.getAllUsers);
router.patch('/update/:username?', validateJWT, updateUser.updateUser);
router.delete('/delete/:username?', validateJWT, deleteUser.deleteUser);

module.exports = router;