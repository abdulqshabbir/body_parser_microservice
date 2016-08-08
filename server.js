var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.json({
        ip_address: req.ip,
        language: req.headers['accept-language'],
        user_information: req.headers['user-agent']
    });
});

function getBrowerInformation(){

}

app.listen(3000, function() {
    console.log('App listening on port 3000');
});
