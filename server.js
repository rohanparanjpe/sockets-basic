/*
 * Creating we bserver for our chatt app
*/

var PORT = process.env.PORT || 3000;
var express = require('express');  //load express using module name
var app = express();  // we create new express app

var http= require('http').Server(app);  // It asks node to start new server and use app as boiler plate

app.use(express.static(__dirname + '/public'));

http.listen(PORT, function(){
    
 console.log('Server Started!!');   
    
});

