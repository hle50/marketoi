/**
 * Created by hoale on 3/13/2016.
 */

var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/app'));
app.listen(PORT, function () {
    console.log('Express is running on ' + PORT);
});

app.get('/', function (req, res) {
});