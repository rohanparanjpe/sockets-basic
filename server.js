/*
 * Creating we bserver for our chatt app
*/

var PORT = process.env.PORT || 3000;
var express = require('express');  //load express using module name
var app = express();  // we create new express app , when we have to add a new route to express we use app.(something) eg app.get

var http= require('http').Server(app);  // It asks node to start new server and use app as boiler plate

var io =require('socket.io')(http)   //calling socket with http server
app.use(express.static(__dirname + '/public'));

io.on('connection',function(){
    
 console.log('User connected by socket.io');   
}); // on lets u listen for events


//starting server
http.listen(PORT, function(){
    
 console.log('Server Started!!');   
    
});

