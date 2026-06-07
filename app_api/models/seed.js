const fs = require('fs');
const mongoose = require('mongoose');

// Bring in the database connection configuration and the schema model
require('./db');
const Trip = mongoose.model('trips');

// Read and parse the local JSON file data structure
const trips = JSON.parse(fs.readFileSync('./app_server/data/trips.json', 'utf8'));

const seed = async () => {
    try {
        // Clear any old records in the collection to prevent data bloat or duplication
        await Trip.deleteMany({});
        
        // Write the parsed JSON array objects into your MongoDB collection
        await Trip.insertMany(trips);
        
        console.log('Database successfully seeded with trips records!');
        process.exit(0);
    } catch (err) {
        console.error('Error during database seeding execution:', err);
        process.exit(1);
    }
};

// Execute the process
seed();