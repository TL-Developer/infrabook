angular.module('infrabook', ['ngResource','ui.router','ngMaterial','picardy.fontawesome']).config(function($stateProvider, $urlRouterProvider, $locationProvider){

  // $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginController'
    })

    .state('feeds', {
      url: '/feeds',
      templateUrl: 'partials/feeds.html',
      controller: 'FeedsController'
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

  $urlRouterProvider.otherwise('/login');
});
