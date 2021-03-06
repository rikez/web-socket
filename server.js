const PORT = process.env.PORT || 3000;
const express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
    console.log('User connected via socket io');

    socket.on('message', function(message) {
        console.log('Message received: ' + message.text);
        message.timestamp = moment().valueOf();
        io.emit('message', message);
    });

    socket.emit('message', {
      text: 'Welcome bicthes',
      timestamp: moment().valueOf()
    });
});

http.listen(PORT, function () {
  console.log('Server launched!');
});
