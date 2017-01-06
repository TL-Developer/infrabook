var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var User = require('../app/models/userSign');
var configAuth = require('./auth');

module.exports = function(passport){

  passport.serializeUser(function(user, done) {
      done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
          done(err, user);
      });
  });

  passport.use(new GoogleStrategy({
      clientID: configAuth.googleAuth.clientID,
      clientSecret: configAuth.googleAuth.clientSecret,
      callbackURL: configAuth.googleAuth.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function (){
        User.findOne({'google.id': profile.id}, function(err, user){
          if(err)
            return done(err);
          if(user)
            return done(null, user);
          else {
            var newUser = new User();
            newUser.google.id = profile.id;
            newUser.google.token = accessToken;
            newUser.google.name = profile.displayName;
            newUser.google.email = profile.emails[0].value;

            newUser.save(function(err) {
              if(err)
                throw err;
              return done(null, newUser);
            });
            console.log(profile);
          }
        });
      });
    }
  ));


  // passport.use('local-signup', new LocalStrategy({
  //     usernameField: 'email',
  //     passwordField: 'password',
  //     passReqToCallback: true
  //   },
  //   function(req, email, password, done) {
  //     process.nextTick(function () {

  //       User.findOne({'local.username': email}, function(err, user){
  //         if(err){
  //           return done(err);
  //         }
  //         if(user) {
  //           return done(null, false, console.log('signupMenssage'));
  //         }else {
  //           var newUser = new User();
  //           newUser.local.username = email;
  //           newUser.local.password = newUser.generateHash(password)
  //         }
  //       });

  //         return done(null, profile);
  //     });
  //   }
  // ));

};
