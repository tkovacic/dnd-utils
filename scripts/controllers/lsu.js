<script>
	angular.module('DNDUTILS').controller('lsuCtrl', function($rootScope, $scope, $cookies) {
		var key = "crownpoint";
		
		$scope.g = 0;
		$scope.s = 0;
		$scope.c = 0;
		$scope.gp = 0;
		$scope.sp = 0;
		$scope.cp = 0;
		$scope.exp = 0;
		$scope.pCount = 1;
		
		$scope.convertCoins = function() {
			if($scope.pCount > 0) {
				$scope.g = Math.floor($scope.gp / $scope.pCount);
				$scope.s = Math.floor($scope.sp / $scope.pCount);
				$scope.c = Math.floor($scope.cp / $scope.pCount);
				if($scope.c >= 10) {
					var leftOverCopper = $scope.c % 10;
					var convertedSilver = Math.floor($scope.c / 10);
					$scope.s += convertedSilver;
					$scope.c = leftOverCopper;
				}
				if($scope.s >= 10 || $scope.c >= 10) {
					var leftOverSilver = $scope.s % 10;
					var convertedGold = Math.floor($scope.s / 10);
					$scope.g += convertedGold;
					$scope.s = leftOverSilver;
				}
			}
		}
		
		$scope.floor = function(input) {
			return Math.floor(input);
		}
		
		$scope.clearInterface = function() {
			$scope.g = 0;
			$scope.s = 0;
			$scope.c = 0;
			$scope.gp = 0;
			$scope.sp = 0;
			$scope.cp = 0;
			$scope.exp = 0;
			$scope.pCount = 1;
		}
		
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