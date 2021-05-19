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
  //const users = await userController.getAllUsers()
  await publicationController.addUserToPublication(actualPublication._id, user)
  req.flash('messageSuccess', 'La publicación se ha creado correctamente')
  res.redirect(req.get('referer'));
});

module.exports = router;
