var passport = require('passport');

module.exports = (app) => {

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
  }

  var controller = app.controllers.feeds;

  app.route('/users')
    .get(controller.getAllUsers);

  app.route('/feeds')
    .get(isLoggedIn, controller.getAllFeeds);

  app.route('/albuns')
    .get(controller.getAllAlbuns);

  app.get('/auth/google', passport.authenticate('google', { scope: [
      'profile','email'
    ]}
  ));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/', successRedirect: '/feeds' }),
    function(req, res) {
      res.redirect('/');
    });

  // route for logging out
  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/feeds');
  });

};
