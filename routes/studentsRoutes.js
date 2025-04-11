const express = require('express');
const { getStudent } = require('../controllers/studentController');


//Router router objects
const router = express.Router();

router.get('/getall',getStudent);


module.exports = router;