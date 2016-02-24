/*
 * Creating we bserver for our chatt app
*/

var PORT = process.env.PORT || 3000;
var moment = require('moment');
var express = require('express');  //load express using module name
var app = express();  // we create new express app , when we have to add a new route to express we use app.(something) eg app.get

var http= require('http').Server(app);  // It asks node to start new server and use app as boiler plate

var io =require('socket.io')(http)   //calling socket with http server
app.use(express.static(__dirname + '/public'));

// on lets u listen for events
io.on('connection',function(socket){     // access to individual socket
    
 console.log('User connected by socket.io');   
 /*
  * Make two browser communicate to each other
 */
 
socket.on('message',function(message){
    
    console.log('Message recieved:'+ message.text);
   message.timestamp = moment().valueOf();  //getting unix timestamp in milliseconds
    io.emit('message',message);
       
    // socket.broadcast.emit('message',message);  it sends to everybody but to user who sent it while io.emit sends it to everyone including sender
    
});    
    
 //socket.emit takes two arguments 'event',{object} event coudl be anything liek pizza delivered, cash got etc here we use message as our event 
    
    socket.emit('message',{
     
     name:'System',
     text:'Welcome to chat application' ,
     timestamp: moment().valueOf()
              
    });

}); 




//starting server
http.listen(PORT, function(){
    
 console.log('Server Started!!');   
    
});

