// import orm.js
var orm = require('../config/orm.js');
//call the ORM functions using burger specific input for the ORM
var burger = {
selectAll: function(callback){
  orm.selectAll('burgers', function (result){
    callback(result);
  });
},

insertOne: function(cols, vals, callback){
  orm.insertOne('burgers', cols, vals, function(result){
    callback(result);
  });
},

updateOne:function(objColVals, condition, callback){
  orm.updateOne('burgers', objColVals, condition, function (result){
callback(result);
  });
}
};
// Export burger.js file.
module.exports = burger;