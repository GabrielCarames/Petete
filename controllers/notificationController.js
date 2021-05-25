const Notification = require('../models/notification');
const User = require('../models/user');
const userController = require('../controllers/userController');

exports.getNotifications = async (userId) => {
    const user = await userController.findById(userId)
    return user.notifications
}

exports.findNotificationById = async (id) => {
    return await Notification.findOne({_id: id}).populate([
        {
            path: 'from',
            model: 'User',
        }
    ])
}

exports.removeNotification = async (userId, notificationId) => {
    await User.updateOne({ _id: userId },
        {
            $pull: {
                notifications: notificationId
            }
        }
    )
    await Notification.remove({ _id: notificationId})
}