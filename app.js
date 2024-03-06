var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/score', function(req, res, next) {
    var data = req.body;
    var url = "http://172.170.62.22:80/api/v1/service/savecancelep/score";
    var apiKey = "Kud4KD2OX4nSGBgEAuEZaBAhc0OhUvFU";
    var headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey
    };
    axios.post(url, data, { headers })
        .then(response => {
            res.send(response.data);
        }).catch(error => {
            console.error('Error:', error.message);
            res.status(500).json(error);
        });
});

app.listen(3000, function() {
    console.log('App listening on port 3000');
});
