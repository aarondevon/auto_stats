var carApp = angular.module('carApp',[]);

carApp.controller('automobile',["$scope", "$http", function($scope, $http){

    $scope.mileage = {};
    $scope.gallons = {};
    $scope.mpgArray = [];

    var fetchMPG = function() {
        return $http.get('/mpgdata').then(function(response){
            if(response.status !== 200){
                throw new Error('Failed to fetch cats from the API');
            }
            $scope.mileage = {};
            $scope.gallons = {};
            $scope.mpgArray = response.data;
            return response.data;
        })
    };

    //$scope.mpg = function() {
    //    $scope.calculateMpg = $scope.mileage / $scope.gallons;
    //    console.log($scope.calculateMpg);

        $scope.mpg = function(mileage, gallons) {
            var average = mileage / gallons;
            console.log(average);
            return $http.post('/add', average).then(fetchMPG);

        };
    //};
}]);











$scope.add = function(cat){
    return $http.post('/add', cat).then(fetchCats);
};
fetchCats();