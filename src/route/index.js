const express = require('express');
const router = express.Router();

const route = require('./route');
const result = require('./result');

router.use('/route', route);
router.use('/result', result);

module.exports = router;