angular.module('infrabook').controller('FeedsController', ['$scope','ApiServices', function($scope, ApiServices){

  ApiServices.feeds.getAll().query(function(feeds){
    console.log(feeds);
  });

}]);
