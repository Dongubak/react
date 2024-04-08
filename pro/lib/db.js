var mysql = require('mysql2');
var db = mysql.createConnection({
   host: '204.234.48.124',
   user: 'tester',
   password: '1234',
   database: 'test',
   port: 43306,

});
db.connect();

module.exports = db;