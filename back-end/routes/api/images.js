const express = require('express');
const router = express.Router();
const imageController = require('../../controllers/imageController');

router.get('/get/:id?/:version?', imageController.getImageData);

module.exports = router;