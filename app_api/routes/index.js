const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');

// Define API routing endpoints mapped cleanly to our Mongoose controller actions
router
    .route('/trips')
    .get(ctrlTrips.tripsList); // Fixed typo: Added the required leading slash!

router
    .route('/trips/:tripCode')
    .get(ctrlTrips.tripsFindByCode);

module.exports = router;