const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET: /api/trips - Returns all trips from the database
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({}).exec();
        if (!trips || trips.length === 0) {
            return res.status(404).json({ "message": "No trips found in database" });
        }
        return res.status(200).json(trips);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// GET: /api/trips/:tripCode - Returns a single trip matching the route parameter
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ 'code': req.params.tripCode }).exec();
        if (!trip) {
            return res.status(404).json({ "message": "Trip code not found" });
        }
        return res.status(200).json(trip);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// POST: /api/trips - Adds a new trip package record into MongoDB
const tripsAddTrip = async (req, res) => {
    try {
        const newTrip = await Trip.create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });
        
        // Return the newly created trip with a 201 Created status
        return res.status(201).json(newTrip);
    } catch (err) {
        // If validation fails or database error occurs
        return res.status(400).json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode, 
    tripsAddTrip // <--- Now exported and ready for the router!
};