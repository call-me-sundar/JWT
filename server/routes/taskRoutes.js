const express = require('express');
const router = express.Router();

const { post } = require('../controller/taskController');

// Define a POST route at '/api/post'
router.post('/api/post', post);

module.exports = router;
