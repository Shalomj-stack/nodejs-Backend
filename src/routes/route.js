const router = require('express').Router();
const config = require('config');
const apiRoute = require('./api/index.route');

// Dynamically load the API common endpoint.
router.use(`${config.api.url}`, apiRoute);

module.exports = router;