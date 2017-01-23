var http = require('http')
  , app  = require('./config/express')();

  // require('./config/database.js')('mongodb://tiago:admin@ds117889.mlab.com:17889/infrabook');
if(process.env.NODE_ENV == 'production'){
  require('./config/database.js')('mongodb://tiago:admin@ds117889.mlab.com:17889/infrabook');
}else{
  require('./config/database.js')('mongodb://localhost/infrabook');
}

http.createServer(app).listen(app.get('port'), () => {
  console.log('Server listening at port ' + app.get('port'));
});
