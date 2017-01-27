angular.module('infrabook', ['ngResource','ui.router','ngMaterial','picardy.fontawesome','ngSanitize','dbaq.emoji','ngDropzone']).config(function($stateProvider, $urlRouterProvider, $locationProvider, emojiConfigProvider, $qProvider){

  $qProvider.errorOnUnhandledRejections(false)

  // $locationProvider.html5Mode(true).hashPrefix('!');

  // emojiConfigProvider.addAlias("smile", ":)");
  // emojiConfigProvider.addAlias("heart", "<3");
  // emojiConfigProvider.addAlias("ok_hand", "+1");

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

  $urlRouterProvider.otherwise('/login');
});
