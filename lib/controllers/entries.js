const { Router } = require('express');
const Entry = require('../models/Entry');

module.exports = Router()
  .post('/post', (req, res, next) => {
    Entry
      .insert(req.body)
      .then(entry => res.send(entry))
      .catch(next);
  });
