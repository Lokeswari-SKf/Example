const express = require('express');

const mysql = require('mysql');
const mysqlConnection = require("../Database");
const RouterAddEdit  = express.Router();



RouterAddEdit.post('/', (req, res) => {

let learner = req.body;
console.log(learner);

var sql = "SET @learner_id = ?;SET @learner_name = ?;SET @learner_email = ?;SET @course_id = ?; CALL learnerAddOrEdit(@learner_id,@learner_name,@learner_email,@course_id);";

console.log(sql);

mysqlConnection.query(sql, [learner.learner_id, learner.learner_name, learner.learner_email, learner.course_id], (err, rows, fields) => {

if (!err){  

console.log(rows);

    rows.forEach(element=> {

      if(element.constructor == Array)

      res.send('New Learner ID : '+ element[0].learner_id);

    });

    }

    else{

      console.log(err);  

    }

  })

});

module.exports = RouterAddEdit;