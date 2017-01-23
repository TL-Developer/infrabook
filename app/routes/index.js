var passport = require('passport');

module.exports = (app) => {

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/#!/login');
  }

  var controller = app.controllers.feeds;

  app.route('/users')
    .get(controller.getAllUsers);

  app.route('/usersSign')
    .get(controller.getAllUsersSign);

  app.route('/feeds')
    .get(isLoggedIn, controller.getAllFeeds);

  app.route('/albuns')
    .get(controller.getAllAlbuns);

  app.get('/auth/google', passport.authenticate('google', { scope: [
      'profile','email'
    ]}
  ));

  app.get('/auth/google/callback',
    // passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/#!/feeds' }),
    function(req, res) {
      passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/#!/feeds' })
      console.log(passport.authenticate('google'));
      // res.redirect('/login');
    });

  // route for logging out
  app.get('/logout', function(req, res) {
      req.session.destroy(function(e){
          req.logout();
          res.redirect('/');
      });
  });

};
