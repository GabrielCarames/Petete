var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const publicationController = require('../controllers/publicationController');

router.post('/uploadpublication', async function(req, res) {
  const publication = req.body.text
  const userId = req.user._id
  var actualPublication = await publicationController.createPublication(publication)
  await userController.addPublicationToUser(userId, actualPublication)
  req.flash('messageSuccess', 'La publicación se ha creado correctamente')
  res.redirect(req.get('referer'));
});

module.exports = router;
