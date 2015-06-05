var carApp = angular.module('carApp',['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);
var apiKey ='j8648ac5mz4f2ws5zcn2egxa';

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


$.ajax({
    type:'GET',
    url:'https://api.edmunds.com/v1/api/maintenance/actionrepository/findbymodelyearid?modelyearid=100537293&fmt=json&api_key=' + apiKey,
    dataType: 'json',
    crossDomain: true,
    success: function (data){
        console.log(data);
        $(".api_info").append(data);

    },
    error: function(xhr) {
        console.log("I don't work");
        console.log("xhr");
    }
});









