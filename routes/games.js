var express = require('express');
const db = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Game.findAll()
    .then(games => {
        res.json(games)
    })
});

module.exports = router;
