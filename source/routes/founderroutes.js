const express = require('express')

const { GetAllFounders, CreateNewFounder } = require('../controllers/foundercontroller')
const  CreateFoundertable = require('../model/founder')
const router = express.Router();


router.get('/founder',GetAllFounders); 
router.post('/founder/add',CreateNewFounder); 
router.get('/createfounderstable', CreateFoundertable);


module.exports = router;