module.exports = (app) => {

  var ModalFeeds = app.models.feeds
    , controller = {};

  // GET TODOS FEEDS DE TODOS UM USUARIOS
  controller.getAllFeeds = (req, res) => {
    ModalFeeds.find({}).exec().then((allFeeds) => {
      res.status(200).json(allFeeds);
    });
  };

  // GET TODOS USUARIOS
  controller.getAllUsers = (req, res) => {
    ModalFeeds.find({}).exec().then((allUsers) => {
      res.status(200).json(allUsers);
    });
  };

  // GET TODOS FEEDS DE UM USUARIO
  controller.getUserFeed = (req, res) => {
    ModalFeeds.find({}).exec().then((userFeed) => {
      res.status(200).json(userFeed);
    });
  };

  return controller;

};
