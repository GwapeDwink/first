const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var http = require('http').Server(express);
var io = require('socket.io')(http);


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function(req, res,next) {
      res.sendFile(__dirname + '/index.html');
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  io.on('connection', function(socket){
    console.log('a user connected');
  });
