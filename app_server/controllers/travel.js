const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

/* Render the travel view template cleanly */
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = 'Travlr Vacations - Travel';
    
    // If the API didn't return an array list, set an error message alert flag
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No trips found matching criteria';
        }
    }
    
    res.render('travel', {
        title: pageTitle,
        trips: responseBody,
        message: message
    });
};

/* GET travel list view page */
const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };

    request(requestOptions, (err, response, body) => {
        if (err) {
            // Corrected guide typo: using err.message instead of e.message
            return res.status(500).send(err.message); 
        }
        if (response.statusCode === 200) {
            renderTravelList(req, res, body);
        } else {
            res.status(response.statusCode).send(body);
        }
    });
};

module.exports = {
    travelList
};
