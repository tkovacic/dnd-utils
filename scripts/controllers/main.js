<script>
	var app = angular.module('DNDUTILS', ['ngCookies', 'ngRoute', 'ui.bootstrap', 'LocalStorageModule', 'btford.socket-io', 'ngMaterial']);
	
	app.factory('authenticate', ['$cookies', function($cookies) {
		var key = "crownpoint";
		var passphraseCookie = $cookies.get('passphrase');
		if(passphraseCookie == key) {
			return "user"
		} else if(passphraseCookie == key + "dm") {
			return "dm"
		} else {
			return "noAccess";
		}
	}]);
	
	app.service('SocketService', ['socketFactory', function SocketService(socketFactory) {
		return socketFactory({
			ioSocket: io.connect('https://dnd-utils.herokuapp.com:3002')
		});
	}]);
	
	app.controller('mainCtrl', function($rootScope, $scope, $cookies, authenticate) {
		
		$scope.status = {
			isopen: false
		};
		
		$scope.username = $cookies.get('nickname');

		$scope.toggleDropdown = function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.status.isopen = !$scope.status.isopen;
		};
		
		$scope.smokeCookie = function() {
			$cookies.remove('passphrase');
			$cookies.remove('nickname');
			$scope.auth = false;
			$scope.dm = false;
			window.location = "https://dnd-utils.herokuapp.com/#!/login";
		}
		
		$rootScope.$on('auth', function(event, args) {
			if(args.access == "dm") {
				$scope.auth = true;
				$scope.dm = true;
				$scope.username = $cookies.get('nickname');
			} else if(args.access == "user") {
				$scope.auth = true;
				$scope.dm = false;
				$scope.username = $cookies.get('nickname');
			} else {
				$scope.auth = false;
				$scope.dm = false;
				window.location = "https://dnd-utils.herokuapp.com/#!/login";
			}
		});
		
		if(!$scope.auth && authenticate != "user" && authenticate != "dm") {
			$scope.auth = false;
			$scope.dm = false;
			window.location = "https://dnd-utils.herokuapp.com/#!/login";
		} else {
			$scope.auth = true;
			$scope.username = $cookies.get('nickname');
			if(authenticate == "dm") {
				$scope.dm = true;
			} else {
				$scope.dm = false;
			}
		}
	});
</script>