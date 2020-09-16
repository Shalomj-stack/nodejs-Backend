const router = require('express').Router();

const usersRoute = require('./users.route');





// If you have any stuff to run for each or all routes, you can just do it here instead.
// Stuffs like rate limiter, ipRestriction, etc

router.use('/users', usersRoute);



module.exports = router;