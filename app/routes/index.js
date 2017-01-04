

module.exports = (app) => {

  var controller = app.controllers.feeds;

  app.route('/users')
    .get(controller.getAllUsers);

  app.route('/users/feeds')
    .get(controller.getUserFeed);

  app.route('/feeds')
    .get(controller.getAllFeeds);


};
