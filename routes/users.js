const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

User = require('../models/users');
//main API page
router.get('/users', (req, res) => {
    User.getUsers(function(err, users) {
        if(err)
            throw err;
        //res.send('Your name is = ' + req.query.name);
        res.json(users);
    });
});

module.exports = router;
