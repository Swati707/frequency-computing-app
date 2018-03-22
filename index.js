//importing modules
var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');

const Controller = require('./backend/controller/frequency_calculator');

var app = express();

//adding middleware
app.use(cors());
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'frontend/dist')));

//Renders the /dist/index.html file generated from 'ng build -prod' at the hompage
app.get('/', function(req, res){
    console.log("at homepage");
    res.sendFile(path.join(__dirname,'./frontend/dist/index.html'));
});

//GET API to request the backend along with sending the value of N
app.get('/:number', Controller.getTopNMostFrequentWords);

//initiating the server
const port = process.env.port || app.get('port') || 3000;

app.listen(port, () => {
    console.log("server started at port: "+port);
});