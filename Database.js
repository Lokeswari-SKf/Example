const mysql = require('mysql');

var mysqlConnection=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'password',
    database:'demo',
   
    multipleStatements:true
 });
 
 mysqlConnection.connect((err)=>{
     if(!err)
     console.log('Connection established');
     else
     console.log('Connection failed'+err);
 });
 

 module.exports = mysqlConnection;