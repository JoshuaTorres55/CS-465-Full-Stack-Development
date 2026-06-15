const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips.js');

// Define API routing endpoints mapped cleanly to our Mongoose controller actions
router
    .route('/trips')
    .get(ctrlTrips.tripsList)   // Fetches the list of trips
    .post(ctrlTrips.tripsAddTrip); // Handles adding a new trip!

router
    .route('/trips/:tripCode')
    .get(ctrlTrips.tripsFindByCode);

module.exports = router;