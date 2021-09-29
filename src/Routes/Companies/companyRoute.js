const express = require('express');
const router = express.Router();
const createCompany = require("../../Controllers/Companies/createCompany");
const getCompanies = require("../../Controllers/Companies/getAllCompanies");
const getCompany = require("../../Controllers/Companies/getCompany");
const updateCompany = require("../../Controllers/Companies/updateCompany");
const deleteCompany = require("../../Controllers/Companies/deleteCompany");
const {validateJWT} = require ("../../Controllers/Authentication/JWT/services/authenticateJWT");

router.post('/create', validateJWT, createCompany.createCompany);
router.get('/byId/:id?', validateJWT, getCompany.getCompany);
router.get('/all', validateJWT, getCompanies.getAllCompanies);
router.patch('/update/:id?', validateJWT, updateCompany.updateCompany);
router.delete('/delete/:id?', validateJWT, deleteCompany.deleteCompany);

module.exports = router;