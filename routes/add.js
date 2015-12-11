express = require('express');
var router = express.Router();
var r = require('rethinkdb');
var connection = null;
var d = new Date();

r.connect({host: 'localhost', port: 28015}, function(err, con){
  if (err) throw err;
  connection = con;
})
/* GET home page. */
router.get('/add', function(req, res) {
      res.render('addSentence');
});

router.post('/add', function(req, res){
  r.db('test').table('vocab').insert({sentence:req.body.sentence, tags:req.body.tagvalues, Date:d.toDateString()}).
  run(connection, function(err, result){
    if (err) throw err;
    })
  res.redirect('add');
})

module.exports = router;

