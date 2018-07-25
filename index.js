const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/index'))

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
	socket.emit('init', {message: 'connected to websocket'});
	socket.on('disconnect', function(){
        socket.broadcast.emit('user:left', {message: 'user disconnected from websocket'});
    });
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
server.listen(3002);