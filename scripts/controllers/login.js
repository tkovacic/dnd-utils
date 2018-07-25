<script>
	angular.module('DNDUTILS').controller('loginCtrl', function($rootScope, $scope, $cookies, $mdDialog) {
		var key = "crownpoint";
		
		$scope.showAlert = function(title, label, message, ok) {
			// Appending dialog to document.body to cover sidenav in docs app
			// Modal dialogs should fully cover application
			// to prevent interaction outside of dialog
			$mdDialog.show(
			  $mdDialog.alert()
				.parent(angular.element(document.querySelector('#popupContainer')))
				.clickOutsideToClose(true)
				.title(title)
				.textContent(message)
				.ariaLabel(label)
				.ok(ok)
			);
		};
		
		$scope.submitPassphrase = function(passphrase, nickname)  {
			if(nickname) {
				if(passphrase == key) {
					$cookies.put('passphrase', key);
					$cookies.put('nickname', nickname);
					$rootScope.auth = true;
					$rootScope.dm = false;
					$rootScope.$broadcast('auth', {'access': 'user'});
					window.location = "https://dnd-utils.herokuapp.com/#!/";
				} else if(passphrase == key + "dm") {
					$cookies.put('passphrase', key + "dm");
					$cookies.put('nickname', nickname);
					$rootScope.auth = true;
					$rootScope.dm = true;
					$rootScope.$broadcast('auth', {'access': 'dm'});
					window.location = "https://dnd-utils.herokuapp.com/#!/";
				} else {
					$scope.showAlert('Failed Validation', 'Error', 'Your passphrase has failed validation', 'Close');
				}
			} else {
				$scope.showAlert('Nickname Required', 'Error', 'Please enter a nickname', 'Close');
			}
		}
	});
</script>