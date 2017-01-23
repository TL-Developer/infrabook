angular.module('infrabook').controller('FeedsController', ['$scope','ApiServices','$state', function($scope, ApiServices, $state){

  $scope.user = [];
  $scope.feeds = [];

  $scope.message = "Animals: :dog: :cat: :snake: People: :smile: :confused: :angry: Places: :house: :school: :hotel: :poop:";
  $scope.messageWithAliases = "Emoji with aliases: :) <3 +1";

  // PUXANDO TODOS FEEDS NA API
  ApiServices.feeds.getAll().query().$promise.then(function(data) {
    // ENVIANDO USUARIO AUTENTICADO NO GOOGLE
    if(data[0].user.google){
      $scope.user = data[0].user.google;
    }

    // ENVIANDO TODOS FEEDS CADASTRADOS NA API
    $scope.feeds = data[0].feeds;

    console.log(data);
    $scope.loading = 'ok';
  }, function(err) {
    console.log('Não foi possível trazer os feeds ' + err);
    $state.go('login');
  });

}]);
