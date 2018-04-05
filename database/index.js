var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root', //change password to yours
  database : 'recipes'
});

//retrieve messages
var selectAll = function(callback) {
  connection.query('SELECT * FROM list', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

 //insert message
var insertOne= function(url, name, callback){
  connection.query('INSERT INTO list (name, companyName, description, dateDue, phone, email) VALUES (?,?,?,?,?,?)',
  [url, name], (err, results)=>{
    if(err){
      console.log("insert error")
      callback(err, null)
    } else{
      console.log(results);
      callback(null, results)
    }
  }
)
}

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne
