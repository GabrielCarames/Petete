var express = require('express');
var router = express.Router();

router.get('/register', function(req, res, next) {
  res.render('user/register', {layout: false})
});

module.exports = router;
