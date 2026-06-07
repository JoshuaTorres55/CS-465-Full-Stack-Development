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

module.exports = {
    tripsList,
    tripsFindByCode, 
};