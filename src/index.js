require('dotenv').config();
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const bodyParser = require('body-parser');
const app = express();

const server = http.createServer(app);
const io = socketio(server)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

require('./server/routes/twitter.js')(app, io);

require('./rabbit/publisher/index');
const listener = require('./rabbit/suscriber/index');
listener.subscriber()   //We have to start our listener

//  API route
app.use('/api', require('./API/routes'));

server.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}: http://localhost:${app.get('port')}`)
});
