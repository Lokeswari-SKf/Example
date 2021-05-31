
const express = require('express');
const bodyparser= require('body-parser');
const LearnRouter= require("./Routes/learner");
const mysqlConnection = require("./Database");
const port = process.env.PORT || 8080;
const LearnerAddEditRouter = require("./Routes/LearnerAddEdit");
var app= express();

app.use(bodyparser.json());
app.use("/learner", LearnRouter);
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/learnerAddEdit",LearnerAddEditRouter);
app.listen(port,()=> console.log('Listening...'));

