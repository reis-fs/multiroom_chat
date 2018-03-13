module.exports = function(app){
  app.get('/', function(req, res){
    app.app.controllers.index.home(app, req, res);
  });
  
  app.get('/index', function(req, res){
    app.app.controllers.index.home(app, req, res);
  });
}
