const express = require('express');
const router = express.Router();
const studyController = require('../controllers/studyController');

// GET
  router.get(`/`, studyController.findPerson);
  router.post(`/`, studyController.findPerson);

// POST


module.exports = router;
