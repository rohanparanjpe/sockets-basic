/*!
   *
 */


var socket = io(); // it is defined in socket.io cdn  

socket.on('connect',function(){
    
    console.log('connected to socketIO server');
        
});
  // listen to messege event defined in server.js
socket.on('message',function(message){
    
   console.log('New Message');
    console.log(message.text);
    
});