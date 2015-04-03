var server = require('http').createServer();
server.listen(8080, '0.0.0.0');
var io_gateway = require('socket.io').listen(server);
var client = io_gateway.sockets;

client.on('connection', function(socket){

	console.log('Someone Connected...');
	socket.on('input-message', function(data){
		client.emit('output-message', data);
	});
});