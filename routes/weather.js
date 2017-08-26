const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

Weather = require('../models/weather');
//main API page
router.get('/weather', (req, res) => {
    Weather.getWeather(function(err, weather) {
        if(err)
            throw err;
        //res.send('Your name is = ' + req.query.name);
        res.json(weather);
    });
});

module.exports = router;

