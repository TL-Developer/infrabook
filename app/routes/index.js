var passport = require('passport');

module.exports = (app) => {

  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
  }

  var controller = app.controllers.feeds;

  app.route('/users')
    .get(controller.getAllUsers);

  app.route('/feeds')
    .get(controller.getAllFeeds);

  app.route('/albuns')
    .get(controller.getAllAlbuns);

  app.get('/auth/google', passport.authenticate('google', { scope: [
      'profile','email'
    ]}
  ));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/', successRedirect: '/feedsl' }),
    function(req, res) {
      res.redirect('/account');
    });

};
