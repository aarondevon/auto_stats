//carApp.controller('mpgcontroller',['$scope', '$http', function($scope, $http) {
//    var apiKey ='j8648ac5mz4f2ws5zcn2egxa';
//    $http.get('https://api.edmunds.com/v1/api/maintenance/actionrepository/findbymodelyearid?modelyearid=100537293&fmt=json&api_key=' + apiKey).then(function(response){
//        if(response.status !== 200){
//            throw new Error('Failed to grab mpg info');
//        }else {
//            console.log("I can get stuff.")
//            console.log(response);
//        }
//
//        return response.data;
//    });
//
//}]);
