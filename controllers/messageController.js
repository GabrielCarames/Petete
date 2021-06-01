const Message = require('../models/message');
const userController = require('../controllers/userController');


exports.getAllMessages = async () => {
    return Message.find({});
}

exports.createAndSaveMessage = async (data) => {
    const {message, user} = data
    const newMessage = new Message({message, user})
    await newMessage.save();
    const completeMessage = await this.findMessageById(newMessage._id)
    return completeMessage
}

// encuentra un mensaje por contenido
exports.findByContent = async (content) => {
    return Message.findOne({message: content})
}

// encuentra un mensaje por el id del usuario
exports.findByCreatorId = async (id) => {
    return Message.findOne({creatorId: id})
}

exports.findMessageById = async (messageId) => {
    return await Message.findOne({ 
        _id: messageId
    }).populate({
        path: 'user',
        model: 'User'
    })
}

exports.updateMessage = async (messageId, content) => {
    await Message.findOneAndUpdate({_id: messageId}, 
        {
            $push: {
                message: content
        }
    })
}