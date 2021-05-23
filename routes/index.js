var express = require('express');
var router = express.Router();
const publicationController = require('../controllers/publicationController');

router.get('/', async function(req, res) {
  var userLogged = req.user
  
  if(!userLogged) {
    res.redirect('/user/login')
  } else {
    console.log(userLogged)
    console.log(userLogged.email)
    const publications = await publicationController.getAllPublications()
    res.render('index', {userLogged, publications});
  }
});

module.exports = router;
