const messageController = require('./controllers/messageController')
const chatController = require('./controllers/chatController')
const userController = require('./controllers/userController');

// recibe la variable io
module.exports = (io) => {
  users = []
  var userRepeat
  io.on('connection', (socket) => {
    socket.on('connected', async (username) => {
      console.log("esa entre")

      userRepeat = users.find(user => {
        return user == username
      })
      if (!userRepeat) {
        users.push(username)
        socket.username = username
        socket.broadcast.emit('userconnect', username)
      }
      //var messages = await chatController.getAllMessages(chatId);
      //socket.emit("chathistory", messages)
    
    })

    // Recibe y envia al cliente el mensaje del usuario
    socket.on('message', async (data) => {
      const newMessage = await messageController.createAndSaveMessage(data)
      await chatController.addNewMessage(currentlyChat, newMessage._id)
      io.emit('message', newMessage);
    });

    // Recibe y envia que un usuario esta escribiendo
    socket.on('typing', (data) => {
      socket.broadcast.emit('typing', data)
    });

    // Recibe y envia que un usuario se desconecto

    socket.on('disconnect', () => {
      io.emit('userdisconnect', socket.username)
    })
  });
}