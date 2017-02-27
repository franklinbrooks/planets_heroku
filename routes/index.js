var express = require('express');
var router = express.Router();
var models = require('../db/models/index');
var app = require('../public/javascripts/app.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "A New Yorker's Guide to the Solar System"
  });
});

/* GET Sun page. */
router.get('/sun', function(req, res, next) {
  res.render('sun', {
    title: "The Sun"
  });
});

/* GET Mercury page. */
router.get('/mercury', function(req, res, next) {
  models.Planet.findById(1)
  .then(function(planet) {
    res.render('mercury', {
      title: "Mercury",
      planet: planet
    });
  });
});

/* GET Venus page. */
router.get('/venus', function(req, res, next) {
  models.Planet.findById(2)
  .then(function(planet) {
    res.render('venus', {
      title: "Venus",
      planet: planet
    });
  });
});

/* GET Earth page. */
router.get('/earth', function(req, res, next) {
  models.Planet.findById(3)
  .then(function(planet) {
    res.render('earth', {
      title: "Earth",
      planet: planet
    });
  });
});

/* GET Mars page. */
router.get('/mars', function(req, res, next) {
  models.Planet.findById(4)
  .then(function(planet) {
    res.render('mars', {
      title: "Mars",
      planet: planet
    });
  });
});

/* GET Jupiter page. */
router.get('/jupiter', function(req, res, next) {
  models.Planet.findById(5)
  .then(function(planet) {
    res.render('jupiter', {
      title: "Jupiter",
      planet: planet
    });
  });
});

/* GET Saturn page. */
router.get('/saturn', function(req, res, next) {
  models.Planet.findById(6)
  .then(function(planet) {
    res.render('saturn', {
      title: "Saturn",
      planet: planet
    });
  });
});

/* GET Uranus page. */
router.get('/uranus', function(req, res, next) {
  models.Planet.findById(7)
  .then(function(planet) {
    res.render('uranus', {
      title: "Uranus",
      planet: planet
    });
  });
});

/* GET Neptune page. */
router.get('/neptune', function(req, res, next) {
  models.Planet.findById(8)
  .then(function(planet) {
    res.render('neptune', {
      title: "Neptune",
      planet: planet
    });
  });
});

/* GET Pluto page. */
router.get('/pluto', function(req, res, next) {
  models.Planet.findById(9)
  .then(function(planet) {
    res.render('pluto', {
      title: "Pluto",
      planet: planet
    });
  });
});

/* GET Proxima_Centauri page. */
router.get('/proxima_centauri', function(req, res, next) {
  models.Planet.findById(10)
  .then(function(planet) {
    res.render('proxima_centauri', {
      title: "Proxima Centauri",
      planet: planet
    });
  });
});

module.exports = router;

