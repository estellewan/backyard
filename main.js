var express = require('express');
var app = express();
var path = require('path');
app.use('/js', express.static('js'))
app.use('/textures', express.static('textures'))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/demo.html'));
});

app.listen(8080);