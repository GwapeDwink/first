var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var messageLog = [];



app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
  console.log('a user connected');

  // on connection, emit log
  socket.emit('catch up', messageLog );

  socket.on('disconnect', function( socket ){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    messageLog.push( msg );
    io.emit('chat message', msg);
  });
});

http.listen((process.env.PORT || 5000), function(){
  console.log('listening on *:5000');
});
