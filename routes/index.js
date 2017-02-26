var express = require('express');
var router = express.Router();
var models = require('../db/models/index');

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
  res.render('mercury', {
    title: "Mercury"
  });
});

/* GET Venus page. */
router.get('/venus', function(req, res, next) {
  res.render('venus', {
    title: "Venus"
  });
});

/* GET Earth page. */
router.get('/earth', function(req, res, next) {
  res.render('earth', {
    title: "Earth"
  });
});

/* GET Mars page. */
router.get('/mars', function(req, res, next) {
  res.render('mars', {
    title: "Mars"
  });
});

/* GET Jupiter page. */
router.get('/jupiter', function(req, res, next) {
  res.render('jupiter', {
    title: "Jupiter"
  });
});

/* GET Saturn page. */
router.get('/saturn', function(req, res, next) {
  res.render('saturn', {
    title: "Saturn"
  });
});

/* GET Uranus page. */
router.get('/uranus', function(req, res, next) {
  res.render('uranus', {
    title: "Uranus"
  });
});

/* GET Neptune page. */
router.get('/neptune', function(req, res, next) {
  res.render('neptune', {
    title: "Neptune"
  });
});

/* GET Pluto page. */
router.get('/pluto', function(req, res, next) {
  res.render('pluto', {
    title: "Pluto"
  });
});

/* GET Proxima_Centauri page. */
router.get('/proxima_centauri', function(req, res, next) {
  res.render('proxima_centauri', {
    title: "Proxima Centauri"
  });
});



module.exports = router;

