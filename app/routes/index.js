module.exports = (app) => {

  var controller = app.controllers.feeds;

  app.route('/users')
    .get(controller.getAllUsers);

  app.route('/feeds')
    .get(controller.getAllFeeds);

  app.route('/albuns')
    .get(controller.getAllAlbuns);

};
