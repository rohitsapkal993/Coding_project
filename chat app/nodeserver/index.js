 
const io = require('socket.io')(8000);

const users = {}

io.on('connection',socket =>{
    // If any nw user joins, let other users connected to the server know!
    socket.on('new-user-joined',name =>{
        console.log('New user' , name)
        users[socket.id]=name
        socket.broadcast.emit('user-joined', name)
    });
    // if someone send a message, broadcast it to other user

    socket.on('send',message =>{
        socket.broadcast.emit('receive', {message: message,name: users[socket.id]})
    });
    // if some one left the chat room,let other know!

    socket.on('disconnect',message =>{
        socket.broadcast.emit('left',users[socket.id]);
        delete users[socket.id]
    });
});