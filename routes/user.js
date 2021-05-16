var express = require('express');
const passport = require('passport');
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('user/login', {layout: false});
});

router.get('/register', function(req, res, next) {
  res.render('user/register', {layout: false})
});


router.post('/register', passport.authenticate('register',
  {
    successRedirect: '/',
    failureRedirect: '/user/register',
    failureFlash: true,
    passReqToCallback: true
  }
));

router.post('/login', passport.authenticate('login',
  {
    successRedirect: '/',
    failureRedirect: '/',
    passReqToCallback: true
  }
));

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
});

module.exports = router;
