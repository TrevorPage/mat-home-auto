'use strict';

var _ = require('lodash');
var http = require('http');

exports.index = function(req, res) {
    
    console.log(req.params.state);

    http.get({
        host: '77.99.3.84',
        port: '7337',
        'auth': 'Trev:test',
        path: '/api/callAction?deviceID=87&name=' + req.params.state
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            //var parsed = JSON.parse(body);
            //callback({
            //    email: parsed.email,
            //    password: parsed.pass
            //});
            res.json(body);
        });
    });
    
    
    //res.json([]);
};