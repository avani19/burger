// Import (require) connection.js
var connection = require('../config/connection.js');
// create a function which create a queston mark to pass it in mySQL commands
function printQuestionMarks(num){
  var arr = [];

  for (var i = 0; i<num; i++){
    arr.push('?');
  }
  return arr.toString();
}

function objToSql(ob){
  var arr = [];
  for(var key in ob){
    if(ob.hasOwnProperty(key)){
      arr.push(key + '=' + ob[key]);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function (tableInput, callback){
    var queryString = 'SELECT * FROM ' + tableInput + ';';
    connection.query(queryString, function(err, result){
      if(err) throw err;
      callback(result);
    });
  },
// cols = column; vals = values
insertOne: function (table, cols, vals, callback){
var queryString = 'INSERT INTO ' + table;
// steps to create a command for mysql
queryString = queryString + '(';
queryString = queryString + cols.toString();
queryString = queryString + ')';
queryString = queryString + 'VALUES (';
queryString = queryString + printQuestionMarks(vals.length);
queryString = queryString + ')';

console.log(queryString);

connection.query(queryString, vals, function(err, result){
  if(err) throw err;
  callback(result);
});
},

updateOne: function (table, objColVals, condition, callback){
  var queryString = ' UPDATE ' + table;

  queryString = queryString + ' SET ';
  queryString = queryString + objToSql(objColVals);
  queryString = queryString + ' WHERE '; 
  queryString = queryString + condition;

  console.log(queryString);
  connection.query(queryString, function (err, result){
    if(err) throw err;
    callback(result);
  });
},
};
// Export the ORM object.
module.exports = orm;

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
