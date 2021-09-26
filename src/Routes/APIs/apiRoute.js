const express = require('express');
const router = express.Router();
const createAPI = require("../../Controllers/APIs/createAPI");
const getAPIs = require("../../Controllers/APIs/getAllAPIs");
const getAPI = require("../../Controllers/APIs/getAPI");
const updateAPI = require("../../Controllers/APIs/updateAPI");
const deleteAPI = require("../../Controllers/APIs/deleteAPI");

router.post('/create', createAPI.createApi);
router.get('/all', getAPIs.getAllApis);
router.get('/byId/:id?', getAPI.getApi);
router.patch('/update/:id?', updateAPI.updateApi);
router.delete('/delete/:id?', deleteAPI.deleteApi);

module.exports = router;