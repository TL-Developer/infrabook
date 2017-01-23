var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var bcrypt = require('bcrypt');

var configAuth = require('./auth');

module.exports = function(passport, app){

  var User = app.models.userSign;

  passport.serializeUser(function(user, done) {
      done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
          done(err, user);
      });
  });


  // passport.use('local-login', new LocalStrategy({
  //      passReqToCallback : true // allows us to pass back the entire request to the callback
  //   },
  //   function(req, username, password, done) {
  //     process.nextTick(function (){
  //       User.findOne({'username': username}, function(err, user){
  //         if(err){
  //           return done(err);
  //         }
  //         if(user){
  //           console.log('User Not Found with username '+username);
  //           return done(null, user);
  //         }

  //         // User exists but wrong password, log the error
  //         if (!isValidPassword(user, password)){
  //             console.log('Invalid Password');
  //             return done(null, false, req.flash('message', 'Invalid Password')); // redirect back to login page
  //         }
  //         // User and password both match, return user from done method
  //         // which will be treated like success
  //         return done(null, user);
  //       });
  //     });

  //     var isValidPassword = function(user, password){
  //       return bcrypt.compareSync(password, user.password);
  //     }
  //   }
  // ));


  // passport.use('local-signup', new LocalStrategy({
  //      passReqToCallback : true // allows us to pass back the entire request to the callback
  //   },
  //   function(req, username, password, done) {
  //     process.nextTick(function (){
  //       User.findOne({'username': username}, function(err, user){
  //         if(err){
  //           return done(err);
  //         }
  //         if(user){
  //           console.log('Usuário já existe: '+username);
  //           return done(null, user);
  //         }else {
  //           var newUser = new User();

  //           newUser.username = username;
  //           newUser.password = createHash(password);
  //           newUser.email = req.param('email');
  //           newUser.displayName = req.param('displayName');
  //           newUser.photoProfile = req.param('photoProfile');
  //           newUser.address.lagradouro = req.param('lagradouro');
  //           newUser.address.cep = req.param('cep');
  //           newUser.address.neighborhood = req.param('neighborhood');
  //           newUser.address.city = req.param('city');
  //           newUser.address.phones.tel = req.param('tel');
  //           newUser.address.phones.cel = req.param('cel');

  //           newUser.save(function(err) {
  //             if(err){
  //               throw err;
  //             }
  //             return done(null, newUser);
  //           });
  //           console.log('User Registration succesful');
  //           return done(null, newUser);
  //         }
  //       });
  //     });
  //   }
  // ));

  passport.use(new GoogleStrategy({
      clientID: configAuth.googleAuth.clientID,
      clientSecret: configAuth.googleAuth.clientSecret,
      callbackURL: configAuth.googleAuth.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function (){
        // console.log(profile);
        User.findOne({'google.id': profile.id}, function(err, user){
          if(err){
            return done(err);
          }
          if(user){
            return done(null, user);
          }else {
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
