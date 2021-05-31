const messageController = require('./controllers/messageController')
const chatController = require('./controllers/chatController')
const userController = require('./controllers/userController');

// recibe la variable io
module.exports = (io) => {
  users = []
  var userRepeat
  var currentlyChat
  io.on('connection', (socket) => {
    socket.on('connected', async (userLogged, chatId) => {
      console.log("esa entre")
      currentlyChat = chatId
      userRepeat = users.find(user => {
        return user == userLogged.name
      })
      if (!userRepeat) {
        users.push(userLogged.name)
        socket.name = userLogged.name
        socket.broadcast.emit('userconnect', userLogged.name)
      }
      var messages = await chatController.getAllMessages(currentlyChat);
      socket.emit("chathistory", messages)
    
    })

    // Recibe y envia al cliente el mensaje del usuario
    socket.on('message', async (data) => {
      console.log('enviaste este mensaje', data)
      const newMessage = await messageController.createAndSaveMessage(data)
      console.log(currentlyChat)
      await chatController.addNewMessage(currentlyChat, newMessage._id)
      io.emit('message', newMessage);
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