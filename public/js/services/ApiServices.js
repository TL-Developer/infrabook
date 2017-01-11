angular.module('infrabook').service('ApiServices', ['$resource', function($resource){

  var url = {
    users: '/users',
    feeds: '/feeds'
  };

  var users = {
    getAll: function(){
      return $resource(url.users);
    }
  };

  var feeds = {
    getAll: function(){
      return $resource(url.feeds);
    }
  };

  return {
    users: users,
    feeds: feeds
  }
}]);
