const express = require('express');
const testing = require('../services/testing');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.json(await testing.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting testing info: ${err.message}`);
    next(err);
  }
});

module.exports = router;
