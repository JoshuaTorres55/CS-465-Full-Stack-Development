const fs = require('fs');
const path = require('path');

// Read and parse the trips.json file from our new data directory
const trips = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/trips.json'), 'utf8'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips: trips });
};

module.exports = {
    travel
};
