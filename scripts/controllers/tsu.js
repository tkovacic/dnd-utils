<script>
	angular.module('DNDUTILS').controller('tsuCtrl', function($rootScope, $scope, $cookies) {
		var key = "crownpoint";
		
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