<script>
	angular.module('DNDUTILS').controller('touCtrl', function($rootScope, $scope, $cookies, $mdDialog, SocketService) {
		var key = "crownpoint";
		
		$scope.users = [];
		$scope.usersCounter = 0;
		$scope.dexStat = 0;
		$scope.dexMod = 0;
		$scope.roll = 0;
		
		SocketService.on('init', function (data) {
			console.log(data.message);
		});
		
		SocketService.on('user:join', function (data) {
			//var message = 'User ' + data.name + ' has joined the turn order utility';
			//$scope.users[$scope.usersCounter++] = data.name;
			console.log(data.message);
		});
		
		SocketService.on('user:left', function (data) {
			//var message = 'User ' + data.name + ' has left the turn order utility';
			//$scope.users.splice($scope.users.indexOf(data.name), 1);
			console.log(data.message);
		});
		
		$scope.showConfirm = function(dex, ini, roll) {
			// Appending dialog to document.body to cover sidenav in docs app
			var confirm = $mdDialog.confirm()
				  .title('You only get one submit for a given order session')
				  .textContent('Make sure your information is correct')
				  .ariaLabel('Smoke weed every day')
				  .ok('Just fucking submit it')
				  .cancel('Let me recheck');

			$mdDialog.show(confirm).then(function() {
			  console.log("submitted the shit\n\n");
			  console.log('Dex: ' + dex + "\nInitiative: " + ini + "\nD20 Roll: " + roll + "\n\n");
			}, function() {
			  console.log("didn't submit shit\n\n");
			});
		};
		
		$scope.submitInitiative = function(dex, ini, roll)  {
			$scope.showConfirm(dex, ini, roll);
		}
	});
	
	angular.module('DNDUTILS').controller('touCtrldm', function($rootScope, $scope, $cookies, SocketService) {
		var key = "crownpoint";
		
		$scope.users = [];
		$scope.usersCounter = 0;
		
		SocketService.on('init', function (data) {
			console.log(data.message);
		});
		
		SocketService.on('user:join', function (data) {
			//var message = 'User ' + data.name + ' has joined the turn order utility';
			//$scope.users[$scope.usersCounter++] = data.name;
			console.log(data.message);
		});
		
		SocketService.on('user:left', function (data) {
			//var message = 'User ' + data.name + ' has left the turn order utility';
			//$scope.users.splice($scope.users.indexOf(data.name), 1);
			console.log(data.message);
		});
		
		$scope.submitPassphrase = function(passphrase)  {
			if(passphrase == key) {
				$cookies.put('passphrase', key);
				$rootScope.auth = true;
				window.location = "https://dnd-utils.herokuapp.com/#!/";
			} else {
				alert('Failed to authenticate');
			}
		}
	});
</script>