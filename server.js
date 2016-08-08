var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.json({
        ip_address: req.ip,
        language: req.headers['accept-language'],
        user_information: req.headers['user-agent']
    });
});

var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
    console.log('App listening on port 3000');
});
