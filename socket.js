const messageController = require('./controllers/messageController')
const chatController = require('./controllers/chatController')
const userController = require('./controllers/userController');

// recibe la variable io
module.exports = (io) => {
  users = []
  var userRepeat
  var currentlyChatId
  io.on('connection', (socket) => {
    socket.on('connected', async (userLogged, chatId) => {
      currentlyChatId = chatId
      userRepeat = users.find(user => {
        return user == userLogged.name
      })
      if (!userRepeat) {
        users.push(userLogged.name)
        socket.name = userLogged.name
        socket.broadcast.emit('userconnect', currentlyChatId)
      }
      console.log(currentlyChatId)
      var messages = await chatController.getAllMessages(currentlyChatId);
      console.log(messages)
      socket.emit("chathistory", currentlyChatId, messages)
    
    })

    // Recibe y envia al cliente el mensaje del usuario
    socket.on('message', async (data) => {
      const newMessage = await messageController.createAndSaveMessage(data)
      await chatController.addNewMessage(currentlyChatId, newMessage._id)
      io.emit('message', currentlyChatId, newMessage);
    });

    // Recibe y envia que un usuario esta escribiendo
    socket.on('typing', (data) => {
      socket.broadcast.emit('typing', data)
    });

    // Recibe y envia que un usuario se desconecto

    socket.on('disconnect', () => {
      io.emit('userdisconnect', socket.name)
    })
  });
}