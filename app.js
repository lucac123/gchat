const path = require('path'),
	  express = require('express'),
	  app = express(),
	  http = require('http'),
	  server = http.createServer(app),
	  { Server } = require('socket.io'),
	  io = new Server(server);


const server_dir = path.join(__dirname, 'public');
const port = process.env.PORT || 3000;

app.use(express.static(server_dir));

let count = 0;
io.on('connection', socket => {
	console.log(`${++count} users connected`);
	socket.on('disconnect', () => {
		console.log(`${--count} users connected`);
	})

	socket.on('msg', (msg) => {
		console.log(`Message received: ${msg}`);
		socket.broadcast.emit('msg', msg);
	});
});

server.listen(port, () => console.log(`Server started at http://18.219.201.144:${port}`));
