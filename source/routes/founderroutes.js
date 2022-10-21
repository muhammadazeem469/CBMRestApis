const express = require('express')



const { getAllFounders,getFounderById, createNewFounder,updateFounder,deleteOneFounder } = require('../controllers/foundercontroller')
const  CreateFoundertable = require('../model/founder') 
const router = express.Router();


router.get('/founders',getAllFounders); 
router.post('/founders/add',createNewFounder); 
router.get('/founders/id/:id',getFounderById); 
router.put('founders/update/:id',updateFounder); 
router.delete('founders/delete/:id',deleteOneFounder); 
router.get('/createfounderstable', CreateFoundertable);

module.exports = router;