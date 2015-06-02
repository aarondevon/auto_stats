var carApp = angular.module('carApp',['ngRoute']);



carApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "/views/routes/home.html"
        }).
        when('/car_input', {
            templateUrl: "/views/routes/car_input.html"
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);


carApp.controller('automobile',["$scope", "$http", function($scope, $http){

    $scope.mileage = "";
    $scope.gallons = "";
    $scope.mpgArray = [];

    var fetchMPG = function() {
        return $http.get('/mpgdata').then(function(response){
            if(response.status !== 200){
                throw new Error('Failed to grab mpg info');
            }
            $scope.mileage = "";
            $scope.gallons = "";
            $scope.mpgArray = response.data;
            return response.data;
        })
    };

    fetchMPG();



        $scope.mpg = function(mileage, gallons) {
            var average = mileage / gallons;
            console.log(average);
            return $http.post('/add', {mileage: average, mpg:" MPG"}).then(fetchMPG);

        };

}]);















