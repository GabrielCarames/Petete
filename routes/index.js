var express = require('express');
var router = express.Router();
const publicationController = require('../controllers/publicationController');

router.get('/', async function(req, res) {
  var user = req.user
  if(!user) {
    res.redirect('/user/login')
  } else {
    const publications = await publicationController.getAllPublications()
    /*var hola = publications.forEach(function(publication) {
      publication.user.forEach(function(user) {
        var soso = user
      });
    });
    console.log(hola);*/
    console.log(publications)
    res.render('index', {publications});
  }
});

module.exports = router;
