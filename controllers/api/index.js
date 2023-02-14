const router = require('express').Router();
const foodRoutes = require('./food-routes');
const userRoutes = require('./user-routes');

router.use('/food', foodRoutes);
router.use('/users', userRoutes);

module.exports = router;
