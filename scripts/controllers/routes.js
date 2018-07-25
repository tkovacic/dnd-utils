<script>
	angular.module('DNDUTILS').config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'loginCtrl'
		})
	   .when('/', {
		   templateUrl: 'views/index.html',
		   controller: 'mainCtrl'
		})
		.when('/lsu', {
		   templateUrl: 'views/lsu.html',
		   controller: 'lsuCtrl'
		})
		.when('/toudm', {
		   templateUrl: 'views/toudm.html',
		   controller: 'toudmCtrl'
		})
		.when('/tou', {
		   templateUrl: 'views/tou.html',
		   controller: 'touCtrl'
		})
		.when('/tsu', {
		   templateUrl: 'views/tsu.html',
		   controller: 'tsuCtrl'
		})
		.when('/ciu', {
		   templateUrl: 'views/ciu.html',
		   controller: 'ciuCtrl'
		})
		.otherwise({
		   redirectTo: '/login'
		});
    }]);
</script>