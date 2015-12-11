var express = require('express');
var router = express.Router();
var r = require('rethinkdb');
var connection = null;

r.connect({host: 'localhost', port: 28015}, function(err, con){
  if (err) throw err;
  connection = con;
})



router.get('/signup', function(req, res) {
//      r.db('test').tableCreate('vocab').run(connection, function(err, result){
//        if (err) throw err;
//        console.log(JSON.stringify(result));
//      })
      res.render('signup');
});

router.post('/signup', function(req,res){
  r.db('test').table('signup').insert({username: req.body.mail, password:req.body.pass
  }).run(connection, function(err, result){
    if (err) throw err;
    console.log(JSON.stringify(result));
    res.render('form');
  })
})

module.exports = router;

