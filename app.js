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
            .when('/', {
                templateUrl : '/views/login.html',
                controller  : 'LoginController'
            })

            .when('/SignUp', {
                templateUrl : '/views/singup.html',
                controller  : 'LoginController'
            })
            .otherwise({
        redirectTo: '/'
      });
    });
