//importar as configurações do servidor
var app = require('./config/server');
var PORT = process.env.PORT || 3000;

//parametrizar porta de escuta
var server = app.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`));

var io = require('socket.io').listen(server);
app.set('io', io);

// criar conexão por websocket
io.on('connection', function (socket) {
	console.log('Usuário Conectou');

	socket.on('disconnect', function(){
		console.log('O usuário desconectou');
	});

	socket.on('msgParaServidor', function(data){
		socket.emit(
			'msgParaCliente', 
			{ apelido: data.apelido, mensagem: data.mensagem }
		);

		socket.broadcast.emit(
			'msgParaCliente', 
			{ apelido: data.apelido, mensagem: data.mensagem }
		);
	});
});