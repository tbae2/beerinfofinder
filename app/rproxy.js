var express = require('express');
var request = require('request');

var apiForwardUrl = 'http://api.brewerydb.com/v2/search';
var app = express();


app.use('/', function(req, res){
    var url = apiForwardUrl + req.url;
    console.log(url);
    console.log(req);
    req.pipe(request(url)).pipe(res);

});

app.listen(process.env.PORT || 3000);
