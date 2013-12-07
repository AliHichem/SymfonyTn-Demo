
var io = require('socket.io').listen(8001);
var redis = require('redis').createClient();

redis.psubscribe('socketio_*');

io.sockets.on('connection', function(socket) {
    redis.on('pmessage', function(pattern, channel, key) {
        socket.emit(channel, key);
    });
});