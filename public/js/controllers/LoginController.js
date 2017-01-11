angular.module('infrabook').controller('LoginController', ['$scope','ApiServices', function($scope, ApiServices){

  $scope.login = function(form) {
    console.log(form)
    $scope.loading = 'sim';

    ApiServices.users.getAll().query(function(users){
      console.log(users);
    });
  };

}]);
