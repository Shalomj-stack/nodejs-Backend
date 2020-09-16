const express = require('express');
const router = express.Router();

const { index } = require('../../controllers/users.controller');

// get route request
router.get('/', index);



module.exports = router;