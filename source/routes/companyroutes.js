const express = require('express')

const { GetAllCompanies, GetCompanyById, UpdateCompany, DeleteOneCompany, AddNewCompany } = require('../controllers/companycontroller')
const  CreateCompanytable = require('../model/company') 
const  {fakeData}  = require('../fakedata/companyfakedata')
const router = express.Router();


router.get('/company',GetAllCompanies); 
router.post('/company/add',AddNewCompany); 
router.get('/company/id/:id',GetCompanyById); 
router.put('/company/update/:id',UpdateCompany); 
router.delete('/company/delete/:id',DeleteOneCompany); 
router.get('/createcompanytable', CreateCompanytable);
router.get('/fakeData', fakeData);

module.exports = router;


