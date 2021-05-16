var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var user = req.user
  if(!user) {
    res.redirect('/user/login')
    //res.render('user/login', {layout: false});
  } else {
    res.render('index', user);
  }
});

module.exports = router;
