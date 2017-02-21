var express = require('express');
var router = express.Router();

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

router.get('/planets', function(req, res, next) {  // main route
  //username variable set to null to allow for conditional rendering of header
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  // grabbing from Products table where route = cupcakes
 models.Planet.findAll({
    where: { category: "Planets"}
  }).then(function(planet){
    res.render('Planets/planet', {
      title: "Cupcakes - Joe's Cocktail Confections",
      cupcakes: cupcakes,
      username:username
    });
  });
});

module.exports = router;
