const express = require('express')


//* Call the controller with the methods
const { getAllCompanies, getCompanyById, updateCompany, deleteOneCompany, createNewCompany } = require('../controllers/companycontroller')
const  CreateCompanytable = require('../model/company') 
const router = express.Router();


router.get('/',getAllCompanies); 
router.post('/add',createNewCompany); 
router.get('/id/:id',getCompanyById); 
router.put('/update/:id',updateCompany); 
router.delete('/delete/:id',deleteOneCompany); 
router.get('/createcompanytable', CreateCompanytable);

module.exports = router;


