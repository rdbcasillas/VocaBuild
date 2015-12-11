express = require('express');
var router = express.Router();
var r = require('rethinkdb');
var connection = null;
var sent_array = [];

r.connect({host: 'localhost', port: 28015}, function(err, con){
  if (err) throw err;
  connection = con;
})

router.get('/myvocab', function(req, res) {
      r.db('test').table('vocab').run(connection).then(function(cursor){
        return cursor.toArray();
        }).then(function(result){
        res.render('myvocab', {key : result});  
      });   
});

router.get('/solution-two/data', function(req, res){
  
  res.json([{ "text": "Meeting" },
  { "text": "Interview" },
  { "text": "Gossip" },
  { "text": "CustomerService" }
  ])
})
module.exports = router;