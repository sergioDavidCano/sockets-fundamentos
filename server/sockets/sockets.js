const { io } = require('../server')
io.on('connection', (client) => {
    console.log('Usuario conectado')
    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    });
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        //emitir a todo los usuarios conectados
        client.broadcast.emit('enviarMensaje', data);
        /*if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO SUPER BIEN'
            })
        } else {
            callback({
                resp: 'TODO SALIO SUPER MAL'
            });
        };*/
    });
});