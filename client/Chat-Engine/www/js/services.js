chatApp.value('USER', {});
chatApp.value('SOCKET_URL', '192.168.0.104:8080');

chatApp.factory('ServerService', ['SOCKET_URL', function(SOCKET_URL){
	var service = {};

	var socket = io(SOCKET_URL);

	service.receive = function(eventName, callback){
		socket.on(eventName, function(data){
			callback(data);
		});
	}

	service.send = function(eventName, data){
		socket.emit(eventName, data);
	}
	return service;
}]);