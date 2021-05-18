var express = require('express');
var router = express.Router();
const publicationController = require('../controllers/publicationController');

router.get('/', async function(req, res, next) {
  var user = req.user
  if(!user) {
    res.redirect('/user/login')
  } else {
    const publications = await publicationController.getAllPublications()
    console.log(publications)
    res.render('index', {publications});
  }
});

router.get('/index2', async function(req, res, next) {
  res.render('index2');
  
});

module.exports = router;
