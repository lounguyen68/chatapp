const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');

const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
    socket.on('on-chat', data => {
        io.emit('user-chat', data)
    })
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
})
