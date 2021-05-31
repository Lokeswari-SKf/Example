const express = require('express');
const mysql = require('mysql');
const mysqlConnection = require("../Database");
const Router  = express.Router();

Router.get("/:id",(req,res)=>{
 mysqlConnection.query("Select * from learner where learner_id=?",[req.params.id], (err, rows, fields)=>
 {
    if(!err)
    {
        console.log(rows);
        res.send(rows);
    }
    else{
        console.log(err);
    }
 });    

});


module.exports = Router;