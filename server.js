var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var request = require('request');

//Create the express App object
var app = express();
var jsonParser = bodyParser.json();

// Mount middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(logger('dev'));

//Routes
app.get('/', function(req, res) {
    res.sendFile('main.html', {
        root: './public/html'
    });
});
//pulling in api for colors and then parsing the info into object
//then send the object from our server to our client side page
app.get('/api/colors', function(req, res) {
    request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function(err, response, body) {
            var data = response.body;
            var json = JSON.parse(data);
            res.send(json);
        })
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Server online. Port: ${port}`);
})
