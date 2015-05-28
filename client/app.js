var carApp = angular.module('carApp',[]);

carApp.controller('automobile',["$scope", "$http", function($scope, $http){
    $scope.heading = "Message: ";
    $scope.persons = [];

    $scope.updateMessage = function(){
        $scope.message = "Hello, " + $scope.name + "!";
    };


}]);