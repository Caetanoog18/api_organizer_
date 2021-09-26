const express = require('express');
const router = express.Router();
const createUser = require("../../Controllers/Users/createUser");
const getUser = require("../../Controllers/Users/getUser");
const getUsers = require("../../Controllers/Users/getAllUsers");
const updateUser = require("../../Controllers/Users/updateUser");
const deleteUser = require("../../Controllers/Users/deleteUser");

router.post('/create', createUser.createUser);
router.get('/byUsername/:username', getUser.getUser);
router.get('/all', getUsers.getAllUsers);
router.patch('/update/:username?', updateUser.updateUser);
router.delete('/delete/:username?', deleteUser.deleteUser);

module.exports = router;