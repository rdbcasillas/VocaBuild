var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/form', function(req, res) {
      res.render('form');
});

module.exports = router;
