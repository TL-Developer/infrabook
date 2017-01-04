
module.exports = (app) => {

  var ModalFeeds = app.models.feeds
    , controller = {};

  // GET TODOS FEEDS DE TODOS UM USUARIOS
  controller.getAllFeeds = (req, res) => {
    res.status(200).json(ModalFeeds[0].feeds);
  };

  // GET TODOS USUARIOS
  controller.getAllUsers = (req, res) => {
    res.status(200).json(ModalFeeds[0]);
  };

  // GET TODOS FEEDS DE UM USUARIO
  controller.getUserFeed = (req, res) => {
    res.status(200).json(ModalFeeds[0].feeds);
  };

  return controller;

};
