'use strict';

const express = require('express');

const router = new express.Router();

//- POST - '/date' - validate date 
router.post('/date', (req, res, next) => {
 const {input} = req.body
 console.log(req.body)
 const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
 console.log(regexDate.test(input))
  res.json({result: regexDate.test(input)})
});

module.exports = router;
