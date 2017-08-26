const express = require('express');
const router = express.Router();

//main API page
router.get('/', (req, res) => {
    res.send('Enter a valid api adress ' + req.query.name);
});

module.exports = router;
