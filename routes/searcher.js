var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.post('/', async function(req, res) {
  const name = req.body.name
  console.log(name)
  const result = await userController.findByName(name)
  console.log(result)
  res.render('search', {result})
});

module.exports = router;
