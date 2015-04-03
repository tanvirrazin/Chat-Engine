chatApp.controller('SigninCtrl', ['$scope','$state', 'USER', 'ServerService',
	function($scope, $state, USER, ServerService){
		$scope.user = {
			name: ''
		};
		$scope.startChat = function(){

			USER.name = $scope.user.name;
			$state.go('chat');
		}
	}
]);

chatApp.controller('ChatCtrl', ['$scope', 'USER', 'SOCKET_URL', 'ServerService',
	function($scope, USER, SOCKET_URL, ServerService){

		$scope.user = {
			name: USER.name
		};

		$scope.messages = [];

		$scope.sendMessage = function(){
			ServerService.send('input-message', {name:$scope.user.name, message: $scope.message});
			$scope.message = '';
		}

		ServerService.receive('output-message', function(data){
			console.log(data);
			$scope.$apply(function(){
				$scope.messages.push(data);				
			})
		});
	}
]);
