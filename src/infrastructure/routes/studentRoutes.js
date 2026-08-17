const express = require('express');
const router = express.Router();
const { studentRepository } = require('../../container');
const StudentController = require('../controllers/StudentController');

const controller = new StudentController(studentRepository);

router.get('/', (req, res) => controller.getStudents(req, res));
router.post('/', (req, res) => controller.createStudent(req, res));

module.exports = router;