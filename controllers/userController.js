const User = require('../models/user');

exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

exports.addPublicationToUser = async (userId, newPublication) => {
    await User.findOneAndUpdate({ _id: userId },
        {
            $push: {
                publications: newPublication
            }
        }
    )
}

exports.addFriendToUser = async (userLoggedId, userToAdd) => {
    await User.findOneAndUpdate({ _id: userLoggedId },
        {
            $push: {
                friends: userToAdd
            }
        }
    )
}

exports.sendNotificationToUser = async (userIdToAdd, newNotification) => {
    await User.findOneAndUpdate({ _id: userIdToAdd },
        {
            $push: {
                notifications: newNotification
            }
        }
    )
}

exports.createUser = async (values) => {
    const { name, surname, password, email, country, gender, age } = values
    const newUser = new User({ name, surname, password, email, country, gender, age })
    await newUser.save()
    return newUser
}

exports.findById = async (id) => {
    return User.findById(id).populate([
        {
            path: 'friends',
            model: 'User'
        },
        {
            path: 'notifications',
            model: 'Notification',
            populate: {
                path: 'from',
                model: 'User'
            }
        },
        {
            path: 'publications',
            model: 'Publication'
        }
    ])
}

exports.getAllUsers = async () => {
    return await User.find().populate({
        path: 'publications',
        model: 'Publication'
    }).lean()
}

/*exports.findById = async (id) => {
    return User.find({ '_id': id }).lean()
}*/

exports.findByName = async (name) => {
    return User.find({ 'name': name }).lean()
}

exports.findByEmail = async (email) => {
    return User.findOne({ 'email': email })
}

