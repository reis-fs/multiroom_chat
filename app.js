//importar as configurações do servidor
var app = require('./config/server');

//parametrizar porta de escuta
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
