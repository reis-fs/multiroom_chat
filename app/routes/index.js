// a declaração desta variável ocorreu devido ao deploy no GCP onde a plataforma aponta a rota de forma difente.
var PORT = process.env.PORT || 3000;

module.exports = function (app) {
  app.get('/', function (req, res) {
    if (PORT === 3000) { // local
      app.app.controllers.index.home(app, req, res);
    } else {
      // GCP
      app.controllers.index.home(app, req, res);
    }
  });
};