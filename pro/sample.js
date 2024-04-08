const mysql = require('mysql2');
const connection = mysql.createConnection({
   host: '203.234.48.124',
   user: 'tester',
   password: '1234',
   database: 'test',
   port: 43306
});

connection.connect();

connection.query('SELECT * from usertable', (error, rows, fields) => {
   if(error) throw error;
   console.log('User info is : ', rows);
});


connection.end();