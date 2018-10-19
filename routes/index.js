var express = require('express');
var router = express.Router();
var users = require("../db/schema")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET signin page. */
router.get('/signin-with-google', function(req, res, next) {
  res.render('signin');
});

/* GET vote page. */
router.get('/vote-now', function(req, res, next) {
  res.render('vote-now');
});

/* GET success page. */
router.get('/success', function(req, res, next) {
  res.render('success');
});

router.post("/signin",function(req,res){
  
  let mail = req.body.mail;
  let password = req.body.password;
  console.log(req.body)
  let user = { mail,password }
  users.create(user,function(err,result){
      if(err){
          console.log(err);
          return res.redirect("/vote-now");
      }
      console.log(result)
      return res.redirect("/vote-now");
  })
})

module.exports = router;
