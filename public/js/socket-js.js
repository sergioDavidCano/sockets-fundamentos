  //Escuchar el servidor 
  var socket = io();
  socket.on('connect', function() {
      console.log('Conectado al server');
  });
  socket.on('disconnect', function() {
      console.log('Perdimos la conexion con el servidor');
  });
  //Enviar informacion
  socket.emit('enviarMensaje', {
      usuario: 'Sergio',
      mensaje: 'Hola mundo'
  }, function(resp) {
      console.log('Respuesta server:', resp)
  });