var http = require('http')
  , app  = require('./config/express')();

if(process.env.NODE_ENV == 'production'){
  require('./config/database.js')('mongodb://tiago:admin@ds113668.mlab.com:13668/hallbeauty');
}else{
  require('./config/database.js')('mongodb://localhost/infrabook');
}

http.createServer(app).listen(app.get('port'), () => {
  console.log('Server listening at port ' + app.get('port'));
});
