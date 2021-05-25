var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const publicationController = require('../controllers/publicationController');

router.post('/uploadpublication', async function(req, res) {
  const publication = req.body.text
  const user = req.user
  var actualPublication = await publicationController.createPublication(publication)
  console.log(actualPublication)
  await userController.addPublicationToUser(user.id, actualPublication)
  await publicationController.addUserToPublication(actualPublication._id, user)
  req.flash('messageSuccess', 'La publicación se ha creado correctamente')
  res.redirect(req.get('referer'));
});

router.get('/getallpublications', userController.isAuthenticated, async function (req, res) {
  const publications = await publicationController.getAllPublications()
  console.log("reretet", publications)
  if(publications.length){
    console.log("sosbueno")
    res.send({status: true, publications})
  }else{
    res.send({status: false, message: 'No hay ninguna publicación.'})
  }
})

module.exports = router;
