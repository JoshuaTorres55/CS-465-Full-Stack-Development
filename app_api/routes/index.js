const express = require('express');
const router = express.Router();
const { expressjwt: jwt } = require('express-jwt'); // 1. Import jwt

// 2. Define the bouncer
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload',
  algorithms: ['HS256']
});

const ctrlTrips = require('../controllers/trips');
const authController = require('../controllers/authentication');

// Define API routing endpoints
router.route('/trips')
  .get(ctrlTrips.tripsList)
  .post(auth, ctrlTrips.tripsAddTrip); // Protected

router.route('/trips/:tripCode')
  .get(ctrlTrips.tripsFindByCode)
  .put(auth, ctrlTrips.tripsUpdateTrip); // Protected

router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(authController.login);

module.exports = router;