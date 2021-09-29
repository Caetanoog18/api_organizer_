const express = require('express');
const router = express.Router();
const createAPI = require("../../Controllers/APIs/createAPI");
const getAPIs = require("../../Controllers/APIs/getAllAPIs");
const getAPI = require("../../Controllers/APIs/getAPI");
const updateAPI = require("../../Controllers/APIs/updateAPI");
const deleteAPI = require("../../Controllers/APIs/deleteAPI");
const {validateJWT} = require ("../../Controllers/Authentication/JWT/services/authenticateJWT");

router.post('/create', validateJWT, createAPI.createApi);
router.get('/all', validateJWT, getAPIs.getAllApis);
router.get('/byId/:id?', validateJWT, getAPI.getApi);
router.patch('/update/:id?', validateJWT, updateAPI.updateApi);
router.delete('/delete/:id?', validateJWT, deleteAPI.deleteApi);

module.exports = router;