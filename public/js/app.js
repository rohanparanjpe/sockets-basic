/*!
   *
 */
 var name = getQueryVariable('name') || 'Anonymous';  //set name to entered name or anonymous
 var room = getQueryVariable('room');

var socket = io(); // it is defined in socket.io cdn  
console.log(name+ ' wants to join ' + room );
socket.on('connect',function(){
    
    console.log('connected to socketIO server');
        
});
  // listen to messege event defined in server.js
socket.on('message',function(message){
    
   var momentTimestamp = moment.utc(message.timestamp);  // value is standardized utc time and no time zones
   console.log('New Message');
   console.log(message.text);
   
    //append name and time stamp
    
    var $message = jQuery('.messages');
    
    $message.append('<p><strong>'+ message.name +' ' + momentTimestamp.local().format('h:mm a') +'</strong></p>');
    
    $message.append('<p>'+ message.text+'</p>');
 //  jQuery('.messages').append('<p><strong>'+momentTimestamp.local().format('h:mm a') +': </strong>'+ message.text +'</p>');    //append adds messeges to html
    
    
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
        
       name:name,    
       text:$message.val() 
        
    });
     
    $message.val(''); //clearing the form
});
