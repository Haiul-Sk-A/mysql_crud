const express = require('express');
const { getStudent, getStudentById, createStudent } = require('../controllers/studentController');


//Router router objects
const router = express.Router();

router.get('/getall',getStudent);
router.get('/get/:id',getStudentById);

//CREATE STUDENT || POST
router.post('/create',createStudent)

module.exports = router;