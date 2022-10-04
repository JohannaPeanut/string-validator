'use strict';

const express = require('express');

const router = express.Router();

// - GET - / - Lists houses and profiles. ({ houses: [], profiles: [] })
router.get('/', (req, res, next) => {
  res.send('Hello Validation')
});

module.exports = router;
