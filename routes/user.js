var express = require('express');
const passport = require('passport');
var router = express.Router();
const userController = require('../controllers/userController');
const notificationController = require('../controllers/notificationController');
const Notification = require('../models/notification');

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

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
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

router.post('/addfriend/:userid', async function(req, res) {
  const userIdToAdd = req.params.userid
  const request = req.body.request
  const userLogged = req.user
  console.log(request, userIdToAdd)
  if(request == 'add'){ //che guerda que aca el userLogged le tuve que meter el [0] porque el passport de mierda me toma a user como un array
      const newNotification = new Notification({
        notificationRequest: request,
        from: userLogged._id
      })
      newNotification.save()
      await userController.sendNotificationToUser(userIdToAdd, newNotification)
  }
  /*if(request == 'refuse') {
    para mucho despues esto me da paja
    la idea es que al usuario logueado no se le muestre mas la sugerencia del amigo en concreto en esa pestaña
  }*/
  req.flash('messageSuccess', 'Se ha enviado una solicitud de amistad')
  res.redirect(req.get('referer'));
});


router.get('/getnotifications', userController.isAuthenticated, async function (req, res) {
  const userId = req.user._id
  const userNotifications = await notificationController.getNotifications(userId)
  if(userNotifications.length){
    res.send({status: true, userNotifications})
  }else{
    res.send({status: false, message: 'No tienes ninguna notificación.'})
  }
})

router.get('/getalluserfriends', async function(req, res, next) {
  const userId = req.user._id
  const friends = await userController.getAllUserFriends(userId)
  if(friends.length){
    res.send({status: true, friends})
  }else{
    res.send({status: false, message: 'No tienes agregado a ningún amigo.'})
  }
});

router.post('/acceptfriend/:notificationid/:fromid', async function(req, res) {
  const notificationId = req.params.notificationid
  const fromId = req.params.fromid
  const userId = req.user._id
  await userController.acceptFriendRequest(userId, fromId, notificationId)
  req.flash('messageSuccess', 'Se ha agregado el amigo satisfactoriamente.')
  res.redirect(req.get('referer'));
});

module.exports = router;