var express = require('express');
const passport = require('passport');
var router = express.Router();
const userController = require('../controllers/userController');


router.get('/login', function(req, res, next) {
  res.render('user/login', {layout: false});
});

router.get('/register', function(req, res, next) {
  res.render('user/register', {layout: false})
});

router.get('/addfriends', async function(req, res, next) {
  const users = await userController.getAllUsers()
  res.render('user/addfriends', {users})
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
