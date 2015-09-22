var app=angular.module('bookstore',['ngRoute']);

app.controller('LoginController', function($scope){
	$scope.user = null; 
	$scope.master = null; 
	$scope.save = function(){ 
		$scope.master = angular.copy($scope.user); 
	}
});
// configure our routes
app.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl : 'login.html',
            controller  : 'LoginController'
        })

        .when('/SignUp', {
            templateUrl : 'signup.html',
            controller  : 'LoginController'
        })
        .otherwise({
    redirectTo: '/'
  });
});
