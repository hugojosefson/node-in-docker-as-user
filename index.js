'use strict';

console.log('Running as ' + process.getgid() + ':' + process.getuid());

var express = require('express');

var port = process.env.PORT || 3000;
var app = express();
app.get('/', function (req, res) {
    res.send({hello: 'world!'});
});

app.listen(port, function () {
    console.log('Listening on port ' + port);
});
