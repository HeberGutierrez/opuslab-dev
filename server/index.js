var express = require('express');
var bodyParser = require('body-parser');
var database = require('../database/index.js')
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

const port = process.env.PORT || 8080;
//handle requests to messages
app.get('/mesageopus', function (req, res) {
  database.selectAll(function(err, results) {
    if(err) {
      console.log('needs fix hitting db');
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

//post requests to post a message
app.post('/sendMessage', function(req, res){
  var name = req.body.name
  var companyName =req.body.companyName
  var description =req.body.description
  var dateDue= req.body.date
  var phone= req.body.phone
  var email= req.body.email

  if(!name){
    console.log('post request error');
    res.sendStatus(400);
  }else {
    database.insertOne(name, companyName, description, dateDue, phone, email, (err, results) =>{
      if(err){
        console.log('error in insertOne()');
        res.sendStatus(500)
      } else {
        res.status(200).json(results)
      }
    })
  }
})

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});
