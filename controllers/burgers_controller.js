// Import express
var express = require('express');
// router for the app
var router = express.Router();
// Import burger.js
var burger = require('../models/burger.js');


router.get('/', function (req, res){
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res){
  burger.selectAll(function (data){
    var hbsObject = {burgers: data};
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers/create', function (req, res){
  burger.insertOne(['Burger_name'], [req.body.Burger_name], function(){
    res.redirect('/burgers');
  });
});

router.put('/burgers/update/:id', function (req, res){
  var conditions = 'id = ' + req.params.id;
  console.log('condition', condition);

  burger.update({ Devoured: req.body.Devoured}, condition, function (){
    res.redirect('/burgers');
  });
});
// export the router
module.exports = router;