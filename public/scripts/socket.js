// export function for listening to the socket
module.exports = function (socket) {

  // send the new user their name and a list of users
  socket.emit('init', {
    name: 'new user'//,
    //users: userNames.get()
  });

  // notify other clients that a new user has joined
  socket.broadcast.emit('user:join', {
    name: 'new user'
  });
};