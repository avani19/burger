// setup the code to connect Node to MySQL.
var mysql = require('mysql');
var connection = mysql.createConnection ({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'burgers_db'
});

connection.connect(function (err){
  if(err){
    console.error('error connectiong: ' + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Export the connection.
module.exports = connection;