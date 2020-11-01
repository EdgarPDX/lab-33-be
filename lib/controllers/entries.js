const { Router } = require('express');
const Entry = require('../models/Entry');

module.exports = Router()
  .post('/', (req, res) => {
    Entry
      .insert(req.body)
      .then(entry => res.send(entry));
  });
