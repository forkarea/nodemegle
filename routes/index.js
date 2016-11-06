var express = require('express');
var router = express.Router();

/* GET home page. */
const indexSetup = function(user) {
  return router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', user});
  });
};

module.exports = indexSetup;
