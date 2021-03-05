var express = require('express');
var router = express.Router();
const db = require("../models");

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.User.findAll()
    .then(users => {
      res.json(users)
    })
});

router.post('/', (req, res) => {
  db.User.create({
    name: req.body.name,
    email: req.body.email,
    gamerTag: req.body.gamerTag,
  })
  .then(user => {
    res.json(user);
  })
})

module.exports = router;
