angular.module('infrabook', ['ngResource','ui.router','ngMaterial','picardy.fontawesome','ngSanitize','dbaq.emoji']).config(function($stateProvider, $urlRouterProvider, $locationProvider, emojiConfigProvider, $qProvider){

  $qProvider.errorOnUnhandledRejections(false)

  // $locationProvider.html5Mode(true).hashPrefix('!');

  emojiConfigProvider.addAlias("smile", ":)");
  emojiConfigProvider.addAlias("heart", "<3");
  emojiConfigProvider.addAlias("ok_hand", "+1");

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

    .state('profile', {
      url: '/profile',
      templateUrl: 'partials/profile.html',
      controller: 'ProfileController'
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
