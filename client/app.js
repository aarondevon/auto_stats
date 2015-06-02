var carApp = angular.module('carApp',[]);

carApp.controller('automobile',["$scope", "$http", function($scope, $http){

    $scope.mileage = "";
    $scope.gallons = "";
    $scope.mpgArray = [];

    var fetchMPG = function() {
        return $http.get('/mpgdata').then(function(response){
            if(response.status !== 200){
                throw new Error('Failed to fetch cats from the API');
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
            return $http.post('/add', {mileage: average, mpg:"MPG"}).then(fetchMPG);

        };

}]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home',{
            templatUrl: "/views/routes/home.html"
        }).
        when('/code',{
            templateUrl: "/views/routes/code.html"
        }).
        when('/projects',{
            templateUrl: "/views/routes/projects.html"
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);











$scope.add = function(cat){
    return $http.post('/add', cat).then(fetchCats);
};
fetchCats();