const express = require('express');
const router = express.Router();

const route = require('./route');
const result = require('./result');
const pir = require('./pir');
const distance = require('./distance');

router.use('/route', route);
router.use('/result', result);
router.use('/pir', pir);
router.use('/distance', distance);

module.exports = router;