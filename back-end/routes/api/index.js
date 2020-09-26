const express = require('express');
const router = express.Router();

router.use('/auth',require('./auth'));
router.use('/images',require('./images'));

router.get('/', function(req, res, next) {
    console.log(req)
    res.send('API is working properly');
});

module.exports = router;