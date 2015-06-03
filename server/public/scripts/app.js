var carApp = angular.module('carApp',['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);


carApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "/views/routes/home.html",
            controller: 'mpgcontroller'
        }).
        when('/car_input', {
            templateUrl: "/views/routes/car_input.html"
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);












