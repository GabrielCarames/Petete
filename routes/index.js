var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var user = req.user
  if(!user) {
    res.redirect('/user/login')
  } else {
    res.render('index');
  }
});

module.exports = router;
