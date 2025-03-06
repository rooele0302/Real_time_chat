
const express = require('express');
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 8000;

app.listen(port, () => {
    console.log('Server is running on port  ${port}');
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on('connection', (socket) => {
    console.log('A user connected');

    // When a user disconnects
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    // When a user sends a message
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

