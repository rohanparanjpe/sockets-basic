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

/*
 * Get the message from the user
 Handles submitting of new messages
*/

var $form = jQuery('#message-form'); //$ is used to say this variable stores a jquery instance

$form.on('submit',function(event){
    
    event.preventDefault();     // used to submit form without refreshing the whole page
    
    var $message = $form.find('input[name= message]'); // find inside an element, it selects any input tags who have any name attr with name- "message"
    
    //send message to the server
    socket.emit('message',{
        
       text:$message.val() 
        
    });
     
    $message.val(''); //clearing the form
});
