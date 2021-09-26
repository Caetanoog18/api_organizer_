const express = require('express');
const router = express.Router();
const createCompany = require("../../Controllers/Companies/createCompany");
const getCompanies = require("../../Controllers/Companies/getAllCompanies");
const getCompany = require("../../Controllers/Companies/getCompany");
const updateCompany = require("../../Controllers/Companies/updateCompany");
const deleteCompany = require("../../Controllers/Companies/deleteCompany");

router.post('/create', createCompany.createCompany);
router.get('/byId/:id?', getCompany.getCompany);
router.get('/all', getCompanies.getAllCompanies);
router.patch('/update/:id?', updateCompany.updateCompany);
router.delete('/delete/:id?', deleteCompany.deleteCompany);

module.exports = router;