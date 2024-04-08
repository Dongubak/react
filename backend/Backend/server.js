const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

const db = mysql.createConnection({

})

app.get('/', (re, res) => {
   return res.json("From backend side");
})

app.get('/users', (req, res) => {
   const sql = 'SELECT 1';
   db.query(sql, (err, data) => {
      if(err) return res.json(err);
      return res.json(data);
   })
})

app.listen(8081, () => {
   console.log('listening');
})

