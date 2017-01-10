angular.module('infrabook', ['ui.router','ngMaterial']).config(function($stateProvider, $urlRouterProvider, $locationProvider){

  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'partials/login.html',
      controller: 'LoginController'
    })

    // .state('anunciantes', {
    //   url: '/:region/anunciantes',
    //   templateUrl: 'partials/client/advertisers.html',
    //   controller: 'AdvertisersController'
    // })

    // .state('viewAdvertiser', {
    //   url: '/:region/anunciantes/:categorie/:id',
    //   templateUrl: 'partials/client/advertiser.html',
    //   controller: 'AdvertiserController'
    // });

  $urlRouterProvider.otherwise('/');
});
